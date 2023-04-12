export declare enum TodoStatus {
    pending = "pending",
    doing = "doing",
    finished = "finished"
}
export declare class TodoOprDto {
    id: string;
    name?: string;
    status?: TodoStatus;
}
