import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { Module } from '@nestjs/common';
import { TodoItemSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'todo',
        schema: TodoItemSchema,
      },
    ]),
  ],
  providers: [TodoResolver, TodoService],
  exports: [TodoService],
})
export class TodoModule {}
