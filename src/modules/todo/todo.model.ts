import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'todoModel' })
export class TodoModel {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  status: string;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;
}
