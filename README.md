# TodoList Clean Architecture

Desarrollo de API rest para un TodoList utilizando Clean Architecture y Express.  
Incluye codigo fuente en TypeScript, testing e integración continua (CI) con GitHub Actions.

##### Trabajo del Sprint 4.1 de IT-Academy en la especialización de Node.js.

###### Descripción del ejercicio:

En esta entrega, crearemos un servidor utilizando Express.js para proporcionar servicios a la API REST de la lista de tareas (TODO-LIST), aplicando clean architecture. Implementaremos las siguientes funcionalidades:

- Añadir una tarea a la lista: Implementaremos una ruta y un controlador para permitir a los usuarios agregar nuevas tareas a su lista.

- Marcar una tarea como completada: Crearemos una ruta y un controlador para permitir a los usuarios marcar una tarea como completada.

- Eliminar una tarea de la lista: Implementaremos una funcionalidad para eliminar tareas de la lista utilizando una ruta y un controlador adecuados.

- Mostrar la lista de tareas: Crearemos una ruta y un controlador para obtener y mostrar la lista completa de tareas a los usuarios.

⭐ Nivel 1  
Documenta y adjunta las verificaciones con una plataforma como Postman o Insomnia a tu proyecto.

⭐⭐ Nivel 2  
Incluye un middleware que añada la cabecera Cache-control: no-cache. Habilita CORS (Cross-Origin Resource Sharing) en las respuestas, ya sea mediante Express o mediante otro middleware.  
Añade un middleware que devuelva un HTTP Status 401 - Unauthorized si la cabecera de la petición no contiene autenticación básica (usuario/contraseña).

⭐⭐⭐ Nivel 3  
Añade pruebas para verificar el correcto funcionamiento de cada uno.

> [!TIP]
> En el directorio ./postman se incluye el archivo con la coleccion de solicitudes HTTP.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```bash
git clone https://github.com/carlosYoko/ita-sprint-3.1.git
cd ita-sprint-3.1
npm install
```

## Comandos

### Para transpilar el proyecto:

Para transpilar el proyecto, usa el siguiente comando:

```bash
npm run build
```

### Para iniciar el servidor:

Para inciar el servidor localmente, usa el siguiente comando:

```bash
npm run start
```

### Ejecutar tests

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.
