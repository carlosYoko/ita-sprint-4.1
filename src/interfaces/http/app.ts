import express from 'express';
import cors from 'cors';
import basicAuth from 'express-basic-auth';
import { routerTodo } from '../controllers/todosControllers';

export const app = express();

// Configuracion del middleware para gestionar el cache
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache');
  next();
});

// Configuracion del middleware CORS
app.use(cors());

// Configuracion del middleware de autenticacion basica
app.use(
  basicAuth({
    users: { usuario: '123456' },
    unauthorizedResponse: 'Unauthorized',
  })
);

// Configuracion del middleware para manejar datos json
app.use(express.json());

// Configuracion del middleware para el Routing
app.use('/api/todo', routerTodo);
