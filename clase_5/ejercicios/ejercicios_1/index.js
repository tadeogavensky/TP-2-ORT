/* 

Ejercicio 1: Crear un Directorio
Crea una función llamada crearDirectorio que reciba la ruta de un directorio como parámetro y genere un nuevo directorio en esa ubicación. Si el directorio ya existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.mkdir.
Maneja errores usando try/catch.

*/

const fs = require("fs");

const existe = async (ruta) => {
  try {
    await fs.promises.access(ruta);
    return true
  } catch (error) {
    return false;
  }
};

async function crearDirectorio(ruta) {
  try {
    console.log("Creando directiorio en: ", ruta);
    if (await existe(ruta)) {
      console.log("El directorio ya existe");
      return;
    }
    await fs.promises.mkdir(ruta);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 

Ejercicio 2: Crear un Archivo en el Directorio
Crea una función llamada crearArchivo que reciba la ruta de un archivo dentro del directorio y escriba un mensaje inicial en el archivo. Si el archivo ya existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.writeFile.
Maneja errores usando try/catch.

*/

async function crearArchivo(ruta, mensaje) {
  try {
    console.log(`Creando un archivo en ${ruta} con el texto: ${mensaje}`);
    if (await existe(ruta)) {
      console.log("El directorio ya existe");
      return;
    }
    await fs.promises.writeFile(ruta, mensaje);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 

Ejercicio 3: Leer el Contenido del Archivo
Crea una función llamada leerArchivo que lea y muestre el contenido del archivo en la consola. Si el archivo no existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.readFile.
Maneja errores usando try/catch.

*/

async function leerArchivo(ruta) {
  try {
    console.log(`Leyendo archivo ${ruta}`);

    if (!(await existe(ruta))) {
      console.log("El archivo no existe en la ruta", ruta);
      return;
    }

    const datos = await fs.promises.readFile(ruta, "utf-8");
    console.log(datos);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 

Ejercicio 4: Agregar Contenido al Archivo
Crea una función llamada agregarContenido que reciba la ruta del archivo y un mensaje como parámetros, y agregue el mensaje al final del archivo sin sobrescribir su contenido. Si el archivo no existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.appendFile.
Maneja errores usando try/catch.

*/

async function agregarContenido(ruta, mensaje) {
  try {
    console.log(`Agregando contenido a ${ruta}`);

    if (!(await existe(ruta))) {
      console.log("El archivo no existe en la ruta", ruta);
      return;
    }

    await fs.promises.appendFile(ruta, mensaje);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 

Ejercicio 5: Listar Archivos en el Directorio
Crea una función llamada listarArchivos que liste todos los archivos contenidos en el directorio. Si el directorio está vacío o no existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.readdir.
Si el directorio contiene archivos, muestra una lista numerada de los nombres de los archivos.
Maneja errores usando try/catch.

*/

async function listarArchivos(ruta) {
  try {
    console.log(`Listando contenido de ${ruta}`);

    if (!(await existe(ruta))) {
      console.log("El directorio no existe", ruta);
      return;
    }

    const archivos = await fs.promises.readdir(ruta);

    if (archivos.length > 0) {
      archivos.map((archivo) => console.log(archivo));
    } else {
      console.log("El directorio no tiene archivos");
      return;
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 

Ejercicio 6: Eliminar el Archivo
Crea una función llamada eliminarArchivo que elimine el archivo especificado. Si el archivo no existe, muestra un mensaje adecuado.

Requisitos:

Usa fs.promises.unlink.
Maneja errores usando try/catch.

*/

async function eliminarArchivo(ruta) {
  try {
    console.log(`Eliminando archivo de ${ruta}`);

    if (!(await existe(ruta))) {
      console.log("El directorio no existe", ruta);
      return;
    }

    await fs.promises.unlink(ruta);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

/* 


Bonus: Integración Completa
Crea una función principal llamada gestionarSistema que integre todas las funciones anteriores en un flujo lógico. Por ejemplo:

Crea un directorio.
Crea un archivo dentro del directorio.
Lee el contenido del archivo.
Agrega contenido al archivo.
Lista los archivos en el directorio.
Elimina el archivo.
Asegúrate de que el flujo sea claro y que manejes los errores en cada paso.

*/

async function gestionarSistema(opcion) {
  const rutaDirectorio = "./miCarpeta";
  const rutaArchivo = `${rutaDirectorio}/mensaje.txt`;

  switch (opcion) {
    case 1:
      await crearDirectorio(rutaDirectorio);
      break;

    case 2:
      await crearArchivo(rutaArchivo, "Hola soy un archivo");
      break;

    case 3:
      await leerArchivo(rutaArchivo);
      break;

    case 4:
      await agregarContenido(rutaArchivo, " actualizado");
      break;

    case 5:
      await listarArchivos(rutaDirectorio);
      break;

    case 6:
      await eliminarArchivo(rutaArchivo);
      break;

    case 7:
      await crearDirectorio(rutaDirectorio);
      await crearArchivo(rutaArchivo, "Hola soy un archivo");
      await leerArchivo(rutaArchivo);
      await agregarContenido(rutaArchivo, " actualizado");
      await listarArchivos(rutaDirectorio);
      await eliminarArchivo(rutaArchivo);
      break;

    default:
      console.log("Opción no válida");
  }
}

gestionarSistema(2);
