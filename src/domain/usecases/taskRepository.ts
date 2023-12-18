import { Task } from '../entities/task';

export interface TaskRepository {
  getAllTasks(): Task[];
  createTask(task: Task): Task;
  toggleTaskDone(taskId: number): Task | null;
  deleteTask(taskId: number): boolean;
}
