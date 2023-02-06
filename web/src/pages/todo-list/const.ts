export const taskStatusText = {
  pending: '待办事项',
  doing: '进行中',
  finished: '已完成',
};

export type ITaskStatusText = keyof typeof taskStatusText