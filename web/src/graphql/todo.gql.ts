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
