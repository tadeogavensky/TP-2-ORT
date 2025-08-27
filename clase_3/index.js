const funcion = (n1, n2, fn) => {
  return fn(n1, n2);
};

const sumar = (n1, n2) => {
  return n1 + n2;
};

const restar = (n1, n2) => {
  return n1 - n2;
};

const saludar = () => {
  return "Hola!";
};

const res = funcion(45, 15, saludar);

console.log("res", res);

function contar(){
  let counter = 0;
  console.log('counter inicial', counter)
  return function(){
    console.log("entra a la funcion")
    counter++
    console.log('counter', counter)
  }
};


const contador = contar();
contador()
contador()
contador()
contador()


