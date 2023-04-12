"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const todo_model_1 = require("./todo.model");
const graphql_1 = require("@nestjs/graphql");
const todo_service_1 = require("./todo.service");
const todo_dto_1 = require("./todo.dto");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getTodoList() {
        return await this.todoService.findAll();
    }
    async addTodo(todoItem) {
        return await this.todoService.createTodo(todoItem);
    }
    async updateTodo(todoItem) {
        return await this.todoService.updateTodo(todoItem);
    }
    async deleteTodo(id) {
        return await this.todoService.deleteTodo(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [todo_model_1.TodoModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodoList", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_model_1.TodoModel),
    __param(0, (0, graphql_1.Args)('todoItem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoOprDto]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "addTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_model_1.TodoModel),
    __param(0, (0, graphql_1.Args)('todoItem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoOprDto]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_model_1.TodoModel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deleteTodo", null);
TodoResolver = __decorate([
    (0, graphql_1.Resolver)(() => [todo_model_1.TodoModel]),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map