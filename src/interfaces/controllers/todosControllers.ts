import express from 'express';
import { taskController } from './taskControllers';

export const routerTodo = express.Router();

routerTodo.get('/', taskController.getTasks);

routerTodo.post('/', taskController.createTask);

routerTodo.put('/:id', taskController.toggleTaskDone);

routerTodo.delete('/:id', taskController.deleteTask);
