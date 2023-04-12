"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const vue_router_1 = require("vue-router");
const index_vue_1 = require("../pages/todo-list/index.vue");
const routes = [
    {
        path: '/',
        redirect: '/todo-list',
    },
    {
        path: '/todo-list',
        component: index_vue_1.default,
    },
];
exports.router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHashHistory)(),
    routes: routes,
});
//# sourceMappingURL=index.js.map