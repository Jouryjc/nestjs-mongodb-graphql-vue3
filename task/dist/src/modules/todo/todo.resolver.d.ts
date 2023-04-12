import { TodoService } from './todo.service';
import { TodoOprDto } from './todo.dto';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodoList(): Promise<(import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    addTodo(todoItem: TodoOprDto): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateTodo(todoItem: TodoOprDto): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteTodo(id: string): Promise<import("./todo.schema").TodoItem & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
