import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoItemDocument } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('todo')
    private readonly todoModel: Model<TodoItemDocument>,
  ) {}

  async findAll() {
    return await this.todoModel.find();
  }

  // async add() {}

  // async edit() {}

  // async delete() {}
}
