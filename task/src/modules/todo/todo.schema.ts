import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoStatus } from './todo.dto';

@Schema({ timestamps: true })
export class TodoItem {
  @Prop()
  name: string;

  @Prop({ enum: TodoStatus })
  status: TodoStatus;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);

export type TodoItemDocument = TodoItem & Document;
