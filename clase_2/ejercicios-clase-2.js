/* 1. Calculadora de Área de Rectángulo:

Declara dos variables, ancho y alto, con valores numéricos.
Calcula el área (ancho * alto) y guárdala en una constante area.
Muestra el resultado en la consola. */

// Ejercicio 1
let ancho = 23;
let alto = 12;

const area = ancho * alto;

console.log("-----EJERCICIO 1-----");
console.log("");
console.log("area", area);
console.log("");

/* 2. Conversor de Temperatura:

Declara una variable gradosCelsius con un valor numérico.
Convierte los grados Celsius a Fahrenheit usando la fórmula: (Celsius * 9/5) + 32.
Guarda el resultado en una variable gradosFahrenheit y muéstralo en consola. */

// Ejercicio 2
let gradosCelsius = 31;
const gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;

console.log("-----EJERCICIO 2-----");
console.log("gradosFahrenheit", gradosFahrenheit);
console.log("");

/* 
3. Verificador de Contraseña:

Declara una constante contrasenaCorrecta con un valor de tipo string.
Declara una variable intentoDeUsuario con otro valor.
Usa un operador de comparación para verificar si el intento es correcto y guarda el resultado (true/false) en una variable esContrasenaValida.
Muestra el resultado en consola.
*/

// Ejercicio 3

const contrasenaCorrecta = "contra12345";
let intentoDeUsuario = "contra123456";

const esContrasenaValida = contrasenaCorrecta === intentoDeUsuario;

console.log("-----EJERCICIO 3-----");
console.log("");
console.log("esContrasenaValida", esContrasenaValida);
console.log("");

/* 
4. Perfil de Usuario:

Crea un objeto usuario con las siguientes propiedades: nombre (string), edad (number), estaRegistrado (boolean), y cursos (un array de strings, ej: ["Node.js", "Git"]).
Muestra en la consola el nombre del usuario y el primer curso de su lista.

*/

const usuario = {
  nombre: "Tadeo",
  edad: 23,
  estaRegistrado: true,
  curso: ["Node.js", "GIT", "Vue.js", "Python"],
};

console.log("-----EJERCICIO 4-----");
console.log("");

console.log("Con doc notation");
console.log("usuario.nombre", usuario.nombre);
console.log("Con bracket notation");
console.log("usuario.nombre", usuario["nombre"]);
console.log("Con doc notation");
console.log("usuario.curso 1", usuario.curso[0]);
console.log("Con bracket notation");
console.log("usuario.curso 1", usuario["curso"][0]);
console.log("");

/* 
5. Evaluador de Acceso a Evento:

Declara una variable edadPersona con un valor numérico.
Declara una variable booleana tieneTicket.
Escribe una expresión lógica que sea true solo si la persona es mayor de 18 años Y tiene un ticket.
Guarda el resultado en una variable puedeAcceder y muéstralo en consola.
*/

console.log("-----EJERCICIO 5-----");
console.log("");

const edadPersona = 42;
const tieneTicket = true;

const puedeAcceder = edadPersona >= 18 && tieneTicket;

console.log("puedeAcceder", puedeAcceder);
console.log("");
