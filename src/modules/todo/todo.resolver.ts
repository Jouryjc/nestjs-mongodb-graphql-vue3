import { TodoModel } from './todo.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { AddTodoDto } from './todo.dto';

@Resolver(() => [TodoModel])
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel])
  async getTodoList() {
    return await this.todoService.findAll();
  }

  @Mutation(() => TodoModel)
  async addTodo(@Args('todoItem') todoItem: AddTodoDto) {
    return await this.todoService.createTodo(todoItem);
  }
}
