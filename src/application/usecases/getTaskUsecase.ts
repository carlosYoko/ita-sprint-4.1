import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

export const getTasksUsecase = (taskRepository: TaskRepository): Task[] => {
  return taskRepository.getAllTasks();
};
