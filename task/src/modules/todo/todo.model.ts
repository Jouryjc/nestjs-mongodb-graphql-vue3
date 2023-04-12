import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TodoStatus } from './todo.dto';

@ObjectType({ description: 'todoModel' })
export class TodoModel {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  status: TodoStatus;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;
}
