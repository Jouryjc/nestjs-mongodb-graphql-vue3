import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TodoStatus } from './todo.dto';

@Schema({ timestamps: true })
export class TodoItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: TodoStatus })
  status: TodoStatus;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);

export type TodoItemDocument = TodoItem & Document;
