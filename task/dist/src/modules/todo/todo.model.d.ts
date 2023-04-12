import { TodoStatus } from './todo.dto';
export declare class TodoModel {
    _id: string;
    name: string;
    status: TodoStatus;
    createAt: Date;
    updateAt: Date;
}
