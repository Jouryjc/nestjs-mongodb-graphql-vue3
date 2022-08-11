import { TodoModel } from './todo.model';
import { Resolver, Query } from '@nestjs/graphql';
import { TodoService } from './todo.service';

@Resolver(() => [TodoModel])
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoModel])
  async getTodoList() {
    return this.todoService.findAll();
  }
}
