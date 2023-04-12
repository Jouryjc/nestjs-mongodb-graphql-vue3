import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoOprDto } from './todo.dto';
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

  async createTodo(item: TodoOprDto) {
    return await this.todoModel.create(item);
  }

  async updateTodo(item: TodoOprDto) {
    return await this.todoModel.findByIdAndUpdate(item.id, item, {
      returnDocument: 'after',
    });
  }

  async deleteTodo(id: string) {
    return await this.todoModel.findByIdAndDelete(id);
  }
}
