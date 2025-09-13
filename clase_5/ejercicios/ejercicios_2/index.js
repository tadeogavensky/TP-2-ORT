const {
  listarTareas,
  agregarTarea,
  completarTarea,
} = require("./services/tareasService");

/* 

Bonus: Integración con la Línea de Comandos
Para que sea una verdadera CLI, el usuario debe poder interactuar con ella usando argumentos.

Consigna: Utiliza process.argv para leer los comandos que el usuario pasa al script.

El primer argumento (process.argv[2]) será el comando (list, add, complete).
Los siguientes argumentos serán los datos (el texto de la tarea, el ID, etc.).

*/

const process = require("process");

const comando = process.argv[2];
const dato = process.argv[3];

switch (comando) {
  case "list":
    listarTareas();
    break;
  case "add":
    agregarTarea(dato);
    break;
  case "complete":
    completarTarea(1678886402000);
    break;
  default:
    break;
}
