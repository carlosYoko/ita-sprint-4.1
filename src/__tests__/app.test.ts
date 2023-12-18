import request from 'supertest';
import { app } from '../interfaces/http/app';

describe('Test de Endpoints a la API con Basic Auth', () => {
  const credentials = Buffer.from('usuario:123456').toString('base64');

  it('POST deberia añadir y devolver las tareas agregadas en /api/todo', async () => {
    const newTask = {
      tarea: 'Aprender MongoDB',
      done: false,
    };

    const response = await request(app)
      .post('/api/todo')
      .set('Authorization', `Basic ${credentials}`)
      .send(newTask);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 1,
      tarea: 'Aprender MongoDB',
      done: false,
    });

    const newTask2 = {
      tarea: 'Aprender Node.js',
      done: false,
    };

    const response2 = await request(app)
      .post('/api/todo')
      .set('Authorization', `Basic ${credentials}`)
      .send(newTask2);

    expect(response2.status).toBe(201);
    expect(response2.body).toEqual({
      id: 2,
      tarea: 'Aprender Node.js',
      done: false,
    });
  });

  it('GET deberia devolver las tareas /api/todo', async () => {
    const response = await request(app)
      .get('/api/todo')
      .set('Authorization', `Basic ${credentials}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        tarea: 'Aprender MongoDB',
        done: false,
      },
      {
        id: 2,
        tarea: 'Aprender Node.js',
        done: false,
      },
    ]);
  });

  it('PUT deberia cambiar el estado de la tarea en /api/:id', async () => {
    const response = await request(app)
      .put('/api/todo/1')
      .set('Authorization', `Basic ${credentials}`);

    expect(response.body[0]).toEqual({
      id: 1,
      tarea: 'Aprender MongoDB',
      done: true,
    });
  });

  it('DELETE deberia eliminar y mostrar mensaje de tarea eliminada en /api/:id', async () => {
    const response = await request(app)
      .delete('/api/todo/1')
      .set('Authorization', `Basic ${credentials}`);

    expect(response.text).toBe('La tarea con ID 1 se ha eliminado');
  });
});

describe('Test de Endpoints a la API sin Basic Auth', () => {
  it('GET debería obtener el mensaje de "Unauthorized" en /api', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });

  it('POST debería obtener el mensaje de "Unauthorized" en /api', async () => {
    const newTask = {
      tarea: 'Aprender MongoDB',
      done: false,
    };

    const response = await request(app).post('/api').send(newTask);

    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });

  it('PUT debería obtener el mensaje de "Unauthorized" en /api/todo/done/:id', async () => {
    const response = await request(app).put('/api/todo/1');

    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });

  it('DELETE debería obtener el mensaje de "Unauthorized" /api/todo/:id', async () => {
    const response = await request(app).delete('/api/todo/1');

    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
  });
});
