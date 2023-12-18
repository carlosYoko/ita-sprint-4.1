import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

export const toggleTaskDoneUsecase = (
  taskId: number,
  taskRepository: TaskRepository
): Task[] => {
  taskRepository.toggleTaskDone(taskId);

  const updatedTask = taskRepository
    .getAllTasks()
    .filter((task) => task.id === taskId);

  return updatedTask;
};
