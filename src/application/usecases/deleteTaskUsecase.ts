import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

export const deleteTaskUsecase = (
  taskId: number,
  taskRepository: TaskRepository
): Task[] => {
  taskRepository.deleteTask(taskId);

  const updatedTasks = taskRepository.getAllTasks();
  return updatedTasks;
};
