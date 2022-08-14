import gql from 'graphql-tag';

export const todoListGql = gql`
  query getTodoList {
    getTodoList {
      _id
      name
      status
    }
  }
`;
