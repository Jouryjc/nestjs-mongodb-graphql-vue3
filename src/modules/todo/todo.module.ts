import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Module } from '@nestjs/common';
import { TodoItemSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: TodoItemSchema,
      },
    ]),
  ],
  controllers: [TodoController],
})
export class TodoModule {}
