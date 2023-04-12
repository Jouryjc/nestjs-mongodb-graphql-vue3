import { Model } from 'mongoose';
import { TodoOprDto } from './todo.dto';
import { TodoItemDocument } from './todo.schema';
export declare class TodoService {
    private readonly todoModel;
    constructor(todoModel: Model<TodoItemDocument>);
    findAll(params?: any): Promise<(import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createTodo(item: TodoOprDto): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateTodo(item: TodoOprDto): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteTodo(id: string): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
