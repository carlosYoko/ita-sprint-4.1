import { Task } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/usecases/taskRepository';

let id = 0;
let dataBase: Task[] = [];

export const taskRepositoryImpl: TaskRepository = {
  getAllTasks: () => dataBase,

  createTask: (task) => {
    task.id = ++id;
    dataBase.push(task);
    return task;
  },

  toggleTaskDone: (taskId) => {
    const task = dataBase.find((task) => task.id === taskId);

    if (!task) {
      return null;
    }

    task.done = !task.done;
    return task;
  },

  deleteTask: (taskId) => {
    const index = dataBase.findIndex((task) => task.id === taskId);

    if (index === -1) {
      return false;
    }

    dataBase.splice(index, 1);
    return true;
  },
};
