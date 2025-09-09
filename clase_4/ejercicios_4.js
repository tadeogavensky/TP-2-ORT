/* 

1. Ejercicio de slice:
Dado el array [10, 20, 30, 40, 50], usa slice para crear un nuevo array que contenga solo los elementos [20, 30].

2. Ejercicio de splice:
Dado el array ['a', 'b', 'c', 'd'], usa splice para eliminar la 'c' y agregar 'x' y 'y' en su lugar.

3. Ejercicio de map:
Tienes un array de objetos [{id: 1, nombre: 'Ana'}, {id: 2, nombre: 'Luis'}]. Usa map para crear un nuevo array que contenga solo los nombres: ['Ana', 'Luis'].


4.Ejercicio de reduce:
Tienes un array de números [5, 10, 15, 20]. Usa reduce para calcular el producto de todos los elementos.


5. Ejercicio de Promise.all:

    - Define un array con 3 URLs de la API de JSONPlaceholder que apunten a diferentes usuarios (ej: /users/6, /users/7, /users/8).
    - Usa Promise.all y fetch para obtener los datos de los tres usuarios en paralelo.
    - Imprime en la consola el nombre de cada uno de los usuarios. */

/* Ejercicio 1 */

const arraySlice = [10, 20, 30, 40, 50];
arraySlice.slice(1, 4); // posicion 1: donde empieza // posicion 3: donde termina
console.log()
console.log("Ejercicio 1")
console.log("arraySlice", arraySlice);

/* Ejercicio 2 */

const arraySplice = ["a", "b", "c", "d"];
arraySplice.splice(2, 1, "x", "y");

console.log()
console.log("Ejercicio 2")
console.log("arraySplice", arraySplice);

/* Ejercicio 3 */

const personas = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
console.log()
console.log("Ejercicio 3")
console.log("Personas:")
personas.map((persona) => {
  console.log(persona.nombre)
});


/* Ejercicio 4 */

const numeros = [5, 10, 15, 20];

const productoTotal = numeros.reduce((acum, num) => {
  return (acum += num);
}, 0);
console.log()
console.log("Ejercicio 4")
console.log("productoTotal", productoTotal);


/* Ejercicio 5 */

const urls = [
  "https://jsonplaceholder.typicode.com/users/6",
  "https://jsonplaceholder.typicode.com/users/7",
  "https://jsonplaceholder.typicode.com/users/8",
];


console.log()
console.log("Ejercicio 5")

const obtenerUsuarios = async (urls) => {
  try {
    const promesas = urls.map((url) => fetch(url).then((res) => res.json()));
    const usuarios = await Promise.all(promesas);
    console.log("Usuarios: ")
    usuarios.map((usuario) => console.log(usuario.name));
  } catch (error) {
    console.log("error", error);
  }
};


obtenerUsuarios(urls);
