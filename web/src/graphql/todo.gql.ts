import gql from 'graphql-tag';

export const addTodo = gql`
  mutation addTodo($todoItem: TodoOprDto!) {
    addTodo(todoItem: $todoItem) {
      name
      status
    }
  }
`;

export const todoListGql = gql`
  query getTodoList {
    getTodoList {
      _id
      name
      status
    }
  }
`;

export const deleteTodoGql = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      _id
    }
  }
`;

export const updateTodoGql = gql`
  mutation updateTodo($todoItem: TodoOprDto!) {
    updateTodo(todoItem: $todoItem) {
      _id
      name
      status
    }
  }
`;
