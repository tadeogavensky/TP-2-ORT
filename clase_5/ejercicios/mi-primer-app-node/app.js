/* Ejercicio 1/2 */
const { obtenerSaludo } = require("./saludo.js");
obtenerSaludo("Hola!!! 😀");

/* Ejercicio 3 */
const fs = require("node:fs");

const datos = fs.readFileSync("./package.json", "utf-8");
console.log("package.json", datos);

/* Ejercicio 4 */

// con cowsay instalado

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Holaaa",
    e: "oO",
    T: "U ",
  })
);
