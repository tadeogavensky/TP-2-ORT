const { obtenerTareas, guardarTareas } = require("../storage/fileStorage");

/**
 * Lista todas las tareas en consola con un formato claro.
 */
const listarTareas = async () => {
  const tareas = await obtenerTareas();

  if (!tareas.length) {
    console.log("No hay tareas en la lista.");
    return;
  }

  tareas.forEach((tarea) => {
    console.log(`ID: ${tarea.id} - [${tarea.completada ? "x" : " "}] ${tarea.texto}`);
  });
};

/**
 * Agrega una nueva tarea con el texto indicado.
 */
const agregarTarea = async (texto) => {
  const tareas = await obtenerTareas();

  const nuevaTarea = {
    id: Date.now(),
    texto,
    completada: false,
  };

  tareas.push(nuevaTarea);
  await guardarTareas(tareas);
  console.log("Tarea añadida con éxito.");
};

/**
 * Marca como completada la tarea con el id indicado.
 */
const completarTarea = async (id) => {
  const tareas = await obtenerTareas();
  const tarea = tareas.find((t) => String(t.id) === String(id));

  if (!tarea) {
    console.log("La tarea no existe");
    return;
  }

  tarea.completada = true;
  await guardarTareas(tareas);
  console.log(`La tarea "${tarea.texto}" fue marcada como COMPLETADA`);
};



module.exports = {
  listarTareas,
  agregarTarea,
  completarTarea,
};
