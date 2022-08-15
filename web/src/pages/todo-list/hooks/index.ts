import { ref } from 'vue';
import { addTodo } from '@/graphql/todo.gql';
import { useMutation } from '@vue/apollo-composable';
import InputTodoForm from './components/InputTodoForm.vue';
import type { TableRow } from '../type';

export const useTodoModal = () => {
  const visible = ref(false);
  const formRef = ref<typeof InputTodoForm>();

  const submitTodo = () => {
    if (!formRef.value?.valid()) {
      return false;
    }

    const { mutate } = useMutation(addTodo);
    const data = formRef.value?.getValue();

    const result = mutate({
      todoItem: {
        name: data.name,
        status: 'pending',
      },
    });
    console.log(result);
  };

  const openTodoModal = () => {
    visible.value = true;
  };

  return {
    visible,
    submitTodo,
    formRef,
    openTodoModal,
  };
};
