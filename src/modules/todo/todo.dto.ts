import { InputType, Field } from '@nestjs/graphql';

export enum TodoStatus {
  pending = 'pending',
  doing = 'doing',
  finished = 'finished',
}

@InputType()
export class TodoOprDto {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  status?: TodoStatus;
}
