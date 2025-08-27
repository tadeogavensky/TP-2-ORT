/* 
5. Ejercicios Prácticos
1. Control de Flujo: Crea una función que reciba una puntuación (0-100) y devuelva una calificación usando if/else:
    90-100: "A"
    80-89: "B"
    70-79: "C"
    <70: "F"
2. Operador Ternario: Crea una función esPar que use el operador ternario para devolver "Es par" o "Es impar" según el número recibido.
3. Calculadora con switch: Crea una función calcular que reciba dos números y un operador ("+", "-", "*" o "/") y devuelva el resultado usando una sentencia switch.
4. Objeto "Libro": Crea un objeto libro con propiedades titulo, autor, año y un método resumen que imprima "El libro [titulo] fue escrito por [autor] en el año [año]".
5. Contador con Closure: Crea una función crearJuego que use un closure para mantener un puntaje privado. Debe devolver un objeto con dos métodos: sumarPunto() y mostrarPuntaje().
6. Iterar Objeto: Crea una función mostrarPropiedades que reciba un objeto e imprima cada una de sus propiedades y valores en la consola. */

/* Ejercicio 1 */
const validarNota = (puntuacion) => {
  if (puntuacion < 0 || puntuacion > 100) return "La nota no es válida";
  if (puntuacion >= 90 && puntuacion <= 100) {
    return "A";
  } else if (puntuacion >= 80 && puntuacion <= 89) {
    return "B";
  } else if (puntuacion >= 70 && puntuacion <= 79) {
    return "C";
  } else {
    return "F";
  }
};

console.log("------- Ejercicio 1 -------");
console.log("validarNota()", validarNota(76));
console.log();

/* Ejercicio 2 */
const esPar = (num) => {
  return num % 2 == 0 ? "Es par" : "Es impar";
};

console.log("------- Ejercicio 2 -------");
console.log("esPar()", esPar(76));
console.log();

/* Ejercicio 3 */
const calcular = (n1, n2, operador) => {
  switch (operador) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      if (n2 == 0) {
        return "No se puede dividir por 0";
      }
      return n1 / n2;

    default:
      return `El operador ${operador} no existe`;
  }
};

console.log("------- Ejercicio 3 -------");
console.log("calcular()", calcular(76, 24, "+"));
console.log("calcular()", calcular(26, 24, "-"));
console.log("calcular()", calcular(42, 24, "*"));
console.log("calcular()", calcular(12, 53, "/"));
console.log("calcular()", calcular(12, 0, "/"));
console.log("calcular()", calcular(12, 0, "$"));
console.log();

/* Ejercicio 4 */
const libro = {
  titulo: "IT",
  autor: "Stephen King",
  anio: 1970,
  resumen: () =>
    console.log(
      `El libro ${libro.titulo} fue escrito por ${libro.autor} en el año ${libro.anio}`
    ),
};

console.log("------- Ejercicio 4 -------");
libro.resumen();
console.log();

/* Ejercicio 5 */

const crearJuego = () => {
  // Variable inicial privada
  let puntaje = 0;
  console.log("Puntaje inicial", puntaje);

  // Devuelve objeto con 2 arrow functions
  return {
    sumarPunto: () => {
      console.log("Sumando puntaje");
      puntaje++;
    },
    mostrarPuntaje: () => {
      console.log(puntaje);
    },
  };
};

console.log("------- Ejercicio 5 -------");
const juego = crearJuego();
juego.sumarPunto();
juego.sumarPunto();
juego.sumarPunto();

juego.mostrarPuntaje();
console.log();

/* Ejercicio 6 */
const mostrarPropiedades = (obj) => {
  console.log("obj", obj);
};

const persona = {
  nombre: "Carlos",
  apellido: "Fernández",
  edad: Math.floor(Math.random() * 60) + 18,
};

console.log("------- Ejercicio 6 -------");
mostrarPropiedades(persona);
