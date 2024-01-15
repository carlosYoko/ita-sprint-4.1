import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

export const deleteTaskUsecase = (
  taskId: number,
  taskRepository: TaskRepository
): Task[] | false => {
  const deletionResult = taskRepository.deleteTask(taskId);

  if (!deletionResult) {
    return false;
  }

  const updatedTasks = taskRepository.getAllTasks();
  return updatedTasks;
};
