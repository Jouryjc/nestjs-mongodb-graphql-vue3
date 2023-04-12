"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoListGql = exports.addTodo = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.addTodo = (0, graphql_tag_1.default) `
  mutation addTodo($todoItem: TodoOprDto!) {
    addTodo(todoItem: $todoItem) {
      name
      status
    }
  }
`;
exports.todoListGql = (0, graphql_tag_1.default) `
  query getTodoList {
    getTodoList {
      _id
      name
      status
    }
  }
`;
//# sourceMappingURL=todo.gql.js.map