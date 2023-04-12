"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.useTodoModal = void 0;
const vue_1 = require("vue");
const todo_gql_1 = require("@/graphql/todo.gql");
const apollo_composable_1 = require("@vue/apollo-composable");
const useTodoModal = () => {
    const visible = (0, vue_1.ref)(false);
    const formRef = (0, vue_1.ref)();
    const submitTodo = () => {
        var _a, _b;
        if (!((_a = formRef.value) === null || _a === void 0 ? void 0 : _a.valid())) {
            return false;
        }
        const { mutate } = (0, apollo_composable_1.useMutation)(todo_gql_1.addTodo, {
            fetchPolicy: 'no-cache',
        });
        const data = (_b = formRef.value) === null || _b === void 0 ? void 0 : _b.getValue();
        mutate({
            todoItem: {
                name: data.name,
                status: 'pending',
            },
        });
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
exports.useTodoModal = useTodoModal;
const deleteTodo = () => { };
exports.deleteTodo = deleteTodo;
const updateTodo = () => { };
exports.updateTodo = updateTodo;
//# sourceMappingURL=index.js.map