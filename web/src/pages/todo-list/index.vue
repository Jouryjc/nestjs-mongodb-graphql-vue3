import { useQuery } from '@vue/apollo-composable';
<template>
  <IxSpace>
    <IxButton @click="refetch">刷新</IxButton>
    <IxButton @click="openTodoModal">添加</IxButton>
  </IxSpace>
  <IxTable row :columns="columns" :dataSource="data">
    <template #name="{ value }">
      <span>{{ value || '-' }}</span>
    </template>
    <template #status="{ value }">
    </template>
    <template #action="{ record }">
      <IxSpace>
        <IxButton mode="primary" @click="updateTodo(record)">编辑</IxButton>
        <IxButton danger mode="primary" @click="deleteTodo(record)">删除</IxButton>
      </IxSpace>
    </template>
  </IxTable>
</template>

<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable'
import { computed, h } from 'vue';
import { addTodo, todoListGql, deleteTodoGql, updateTodoGql } from '../../graphql/todo.gql'
import { IxTag, TableColumn, useModal, useNotification } from '@idux/components';
import { useTodoModal } from './hooks/index'
import InputTodoForm from './components/InputTodoForm.vue';
import type { TableRow } from './type'
const { success, error } = useNotification()

const { result, refetch } = useQuery(todoListGql)
const data = computed(() => result.value?.getTodoList)
const columns: TableColumn<TableRow>[] = [
  {
    title: '任务事项',
    dataKey: 'name',
  },
  {
    title: '状态',
    dataKey: 'status',
    customCell: ({ value }) => {
      return h(IxTag, {
        color: getStatusBadge(value)
      }, {
        default: () => value
      })
    }
  },
  {
    title: '操作',
    key: 'action',
    customCell: 'action'
  }
]

const getStatusBadge = (status: TableRow['status']) => {
  return {
    pending: 'orange',
    finished: 'success',
    doing: 'info'
  }[status]
}
const { mutate } = useMutation(addTodo);
const { formRef } = useTodoModal()
const { open, confirm } = useModal()
const openTodoModal = () => {
  open({
    header: '创建待办事项',
    content: h(InputTodoForm),
    contentProps: {
      ref: formRef
    },
    onOk: () => {
      if (!formRef.value?.valid()) {
        return false;
      }

      const data = formRef.value?.getValue();

      mutate({
        todoItem: {
          name: data.name,
          status: 'pending',
        },
      });
    },
  })
}

const { mutate: deleteMutate } = useMutation(deleteTodoGql)
const deleteTodo = (record: TableRow) => {
  confirm({
    title: '删除',
    content: `确定删除${record.name}?`,
    onOk: async () => {
      try {
        await deleteMutate({
          id: record._id
        })

        success({
          title: '成功',
          content: '删除任务成功！'
        })
        refetch()
      } catch {
        error({
          title: '失败',
          content: '删除失败！'
        })
      }
    }
  })
};

const { mutate: updateMutate } = useMutation(updateTodoGql)
const updateTodo = (record: TableRow) => {
  open({
    header: '编辑任务',
    content: h(InputTodoForm, {
      formData: record
    }),
    contentProps: {
      ref: formRef
    },
    onOk: async () => {
      if (!formRef.value?.valid()) {
        return false;
      }

      const data = formRef.value?.getValue() as TableRow;

      try {
        await updateMutate({
          todoItem: {
            id: record._id,
            name: data.name,
            status: data.status,
          },
        });
        success({
          title: '成功',
          content: '编辑任务成功！'
        })
        refetch()
      } catch {
        fail({
          title: '失败',
          content: '编辑失败！'
        })
      }

    },
  })
};


</script>