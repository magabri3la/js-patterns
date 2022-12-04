/*
  Es la tecnica que transforma todas las funciones en funciones unarias,
  es decir, funciones que solamente reciben un argumento.
*/

// const suma = (a,b) => a + b;

const suma = a => b => a + b;

console.log(suma(1)(2));

const suma1 = suma(1);
console.log(suma1(2));



