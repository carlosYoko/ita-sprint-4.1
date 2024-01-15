import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

export const toggleTaskDoneUsecase = (
  taskId: number,
  taskRepository: TaskRepository
): Task[] | false => {
  const taskDoned = taskRepository.toggleTaskDone(taskId);

  if (!taskDoned) {
    return false;
  }

  const updatedTask = taskRepository
    .getAllTasks()
    .filter((task) => task.id === taskId);

  return updatedTask;
};
