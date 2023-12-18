import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

interface CreateTaskInput {
  tarea: string;
  done: boolean;
}

let id = 0;

export const createTaskUsecase = (
  input: CreateTaskInput,
  taskRepository: TaskRepository
): Task => {
  const newTask: Task = {
    id: ++id,
    tarea: input.tarea,
    done: input.done,
  };

  return taskRepository.createTask(newTask);
};
