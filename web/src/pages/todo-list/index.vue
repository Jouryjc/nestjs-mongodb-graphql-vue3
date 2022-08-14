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
  <IxModal v-model:visible="visible" header="创建待办事项" :onOk="submitTodo">
    <InputTodoForm ref="formRef" />
  </IxModal>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed, h } from 'vue';
import { todoListGql } from '../../graphql/todo.gql'
import { IxTag, TableColumn } from '@idux/components';
import { useTodoModal, updateTodo, deleteTodo } from './hooks/index'
import InputTodoForm from './components/InputTodoForm.vue';
import type { TableRow } from './type'

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

const { visible, formRef, openTodoModal, submitTodo } = useTodoModal()
</script>