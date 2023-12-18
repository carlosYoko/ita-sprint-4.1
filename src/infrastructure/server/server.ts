import { app } from '../../interfaces/http/app';

const PORT = 3000;

export const server = app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto: ', PORT);
});
