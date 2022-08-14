import { TodoModel } from './todo.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoOprDto } from './todo.dto';

@Resolver(() => [TodoModel])
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel])
  async getTodoList() {
    console.log('query todo list');
    return await this.todoService.findAll();
  }

  @Mutation(() => TodoModel)
  async addTodo(@Args('todoItem') todoItem: TodoOprDto) {
    return await this.todoService.createTodo(todoItem);
  }

  @Mutation(() => TodoModel)
  async updateTodo(@Args('todoItem') todoItem: TodoOprDto) {
    return await this.todoService.updateTodo(todoItem);
  }

  @Mutation(() => TodoModel)
  async deleteTodo(@Args('id') id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
