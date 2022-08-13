import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddTodoDto } from './todo.dto';
import { TodoItemDocument } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('todo')
    private readonly todoModel: Model<TodoItemDocument>,
  ) {}

  async findAll(params?: any) {
    return await this.todoModel.find(params);
  }

  async createTodo(item: AddTodoDto) {
    return await this.todoModel.create(item);
  }

  // async edit() {}

  // async delete() {}
}
