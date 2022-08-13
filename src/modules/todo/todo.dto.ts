import { InputType, Field } from '@nestjs/graphql';

export enum TodoStatus {
  pending = 'pending',
  doing = 'doing',
  finished = 'finished',
}

@InputType()
export class AddTodoDto {
  @Field()
  name: string;

  @Field()
  status: TodoStatus;
}
