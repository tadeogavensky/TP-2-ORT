const { sumar, restar } = require("./calc.js");
const { obtenerChiste } = require("./chistes");
const {
  escribirEnArchivo,
  leerDeArchivo,
  crearCarpeta,
} = require("./archivos.js");

/* console.log(sumar(1, 2));
console.log(restar(1, 2));

obtenerChiste().then((res) => {
  console.log("setup", res.setup);
  console.log("punchline ", res.punchline);
}); */

escribirEnArchivo("./texto.txt", "Hola!!!");

leerDeArchivo("./texto.txt");

//crearCarpeta("./contenido")
