import { Request, Response } from 'express';
import { taskRepositoryImpl } from '../../infrastructure/database/taskRepositoryImpl';
import { createTaskUsecase } from '../../application/usecases/createTaskUsecase';
import { getTasksUsecase } from '../../application/usecases/getTaskUsecase';
import { toggleTaskDoneUsecase } from '../../application/usecases/putTaskUsecase';
import { deleteTaskUsecase } from '../../application/usecases/deleteTaskUsecase';

export const taskController = {
  getTasks: (req: Request, res: Response) => {
    const tasks = getTasksUsecase(taskRepositoryImpl);
    res.status(200).send(tasks);
  },

  createTask: (req: Request, res: Response) => {
    const task = req.body;
    const newTask = createTaskUsecase(task, taskRepositoryImpl);

    res.status(201).send(newTask);
  },

  toggleTaskDone: (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = toggleTaskDoneUsecase(taskId, taskRepositoryImpl);

    if (!updatedTask) {
      res.status(404).send('No existe la tarea');
      return;
    }

    res.status(200).send(updatedTask);
  },

  deleteTask: (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);
    const success = deleteTaskUsecase(taskId, taskRepositoryImpl);

    if (!success) {
      res.status(404).send('No existe la tarea');
      return;
    }

    res.status(200).send(`La tarea con ID ${taskId} se ha eliminado`);
  },
};
