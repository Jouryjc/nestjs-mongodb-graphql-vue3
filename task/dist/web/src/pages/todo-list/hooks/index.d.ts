export declare const useTodoModal: () => {
    visible: import("vue").Ref<boolean>;
    submitTodo: () => boolean;
    formRef: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    openTodoModal: () => void;
};
export declare const deleteTodo: () => void;
export declare const updateTodo: () => void;
