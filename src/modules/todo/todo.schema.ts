import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class TodoItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: number;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);

export type TodoItemDocument = TodoItem & Document;
