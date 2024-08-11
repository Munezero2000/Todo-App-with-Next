export interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdBy?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
