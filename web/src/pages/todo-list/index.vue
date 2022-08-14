import { useQuery } from '@vue/apollo-composable';
<template>
  <section class="todo-list-container">
    <CCard style="width: 18rem" v-for="(item, index) of list" :key="item._id">
      <CCardImage rounded orientation="top" :src="vueImg" />
      <CCardBody>
        <CCardTitle>{{ item.name }}</CCardTitle>
        <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.
        </CCardText>
        <CButton color="link" @click="editItem(item)">编辑</CButton>
        <CButton color="link" @click="deleteItem(item)">删除</CButton>
      </CCardBody>
    </CCard>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue';
import { todoListGql } from '../../graphql/todo.gql'
import vueImg from './vue.jpeg'

const { result, error, refetch } = useQuery(todoListGql)
const list = computed(() => result.value?.getTodoList)

const getStatusBadge = (status: string) => {
  return {
    pending: 'dark',
    finished: 'success',
    doing: 'info'
  }[status]
}
</script>

<style lang="less" scoped>
.todo-list-container {
  display: flex;
  flex-direction: row;

  .card {
    margin-left: 8px;
  }
}
</style>