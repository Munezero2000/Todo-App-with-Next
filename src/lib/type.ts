export interface ITodo {
    id: string;              // UUID
    title: string;           // Non-null text
    description: string;     // Non-null text
    completed: boolean;      // Non-null boolean, default is false
    createdBy?: string;      // UUID, nullable
    dueDate?: Date;          // Nullable timestamp
    createdAt: Date;         // Non-null timestamp, default is now
    updatedAt: Date;         // Non-null timestamp, default is now
  }
  