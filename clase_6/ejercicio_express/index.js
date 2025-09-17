import express from "express";

const app = express();

app.use(express.json());

let tareas = [
  { id: 1, descripcion: "Aprender Express.js", completada: false },
  { id: 2, descripcion: "Construir una API", completada: false },
];

let nextId = 3;

/* 
Endpoint GET /tareas (Obtener todas las tareas):
Implementa una ruta GET en /tareas que devuelva el array tareas como JSON.
*/
app.get("/tareas", (req, res) => {
  res.send(tareas);
});

/* 
Endpoint GET /tareas/:id (Obtener una tarea por ID):
Implementa una ruta GET en /tareas/:id.

Usa req.params.id para encontrar la tarea. Recuerda que id será un string, quizás necesites convertirlo a número (parseInt).
Si la tarea no se encuentra, devuelve un res.status(404).json({ mensaje: 'Tarea no encontrada' }).
Endpoint POST /tareas (Crear una nueva tarea):
*/
app.get("/tareas/:id", (req, res) => {
  const id = req.params.id;
  const tareasPorId = tareas.filter((tarea) => tarea.id == parseInt(id));
  tareasPorId.length > 0
    ? res.send(tareasPorId[0])
    : res.status(404).json({ mensaje: "Tarea no encontrada" });
});

/* 
Implementa una ruta POST en /tareas.
Espera un objeto JSON en req.body con la descripcion de la tarea.
Crea un nuevo objeto tarea con un id único (nextId++) y completada: false.
Añade la nueva tarea al array tareas.
Devuelve la tarea creada con un res.status(201).json(nuevaTarea).
*/

app.post("/tareas", (req, res) => {
  const descripcion = req.body.descripcion;

  const nuevaTarea = {
    id: nextId++,
    descripcion: descripcion,
    completada: false,
  };

  tareas.push(nuevaTarea);

  res.status(201).json(nuevaTarea);
});

/* 

Endpoint PUT /tareas/:id (Actualizar una tarea):
Implementa una ruta PUT en /tareas/:id.
Encuentra la tarea por id.
Si la tarea existe, actualiza su descripcion y/o completada con los datos de req.body.
Devuelve la tarea actualizada. Si no se encuentra, devuelve 404.

*/
app.put("/tareas/:id", (req, res) => {
  const id = req.params.id;
  const descripcion = req.body.descripcion;
  const completada = req.body.completada;

  const tareasPorId = tareas.filter((tarea) => tarea.id == parseInt(id));
  const tareaBuscada = tareasPorId[0];

  if (tareaBuscada) {
    if (descripcion) {
      tareaBuscada.descripcion = descripcion;
    }
    if (completada) {
      tareaBuscada.completada = completada;
    }

    res.send();
  } else {
    res.status(404).json({ mensaje: "No se encontro la tarea" });
  }
});

/* 
Endpoint DELETE /tareas/:id (Eliminar una tarea):
Implementa una ruta DELETE en /tareas/:id.
Elimina la tarea del array tareas.
Devuelve un res.status(204).send() si la eliminación fue exitosa.

*/
app.delete("/tareas/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let tareaEncontrada = null;
  tareas.forEach((tarea) => {
    if (tarea.id == parseInt(id)) {
      tareaEncontrada = tarea;
    }
  });
  console.log(tareaEncontrada);

  if (tareaEncontrada != null) {
    tareas = tareas.filter((tarea) => tarea.id != parseInt(id));
    res.status(204).send();
  } else {
    res.status(404).json({ mensaje: "No se encontro la tarea" });
  }
});

app.listen(8080);
