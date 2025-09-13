// Capa de acceso a datos para tareas
// Lee y escribe el archivo JSON de tareas de forma segura

const fs = require("fs");
const path = require("path");

const RUTA_TAREAS = path.join(__dirname, "..", "tareas.json");

/**
 * Lee el archivo de tareas y devuelve un array.
 * Si no existe, devuelve [].
 */
const obtenerTareas = async () => {
  try {
    const contenido = await fs.promises.readFile(RUTA_TAREAS, "utf-8");
    return contenido?.length ? JSON.parse(contenido) : [];
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
};

/**
 * Persiste el array de tareas en el archivo JSON con formato legible.
 */
const guardarTareas = async (tareas) => {
  const tareasJson = JSON.stringify(tareas, null, 2);
  await fs.promises.writeFile(RUTA_TAREAS, tareasJson);
};

module.exports = {
  obtenerTareas,
  guardarTareas,
  RUTA_TAREAS,
};

