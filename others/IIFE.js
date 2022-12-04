/*
IIFE: Expresión de función ejecutada inmediatamente

https://developer.mozilla.org/es/docs/Glossary/IIFE

Son funciones que se ejecutan tan pronto como se definen.

Nos ayuda a definir el patron modulo revelador, tambien
con los nombres de las variables para que queden solo en el
alcance de la funcion que hemos definido.
*/

const result = (() => {
  const x = 'Hola';
  console.log(x)
})();

console.log('outside', x);
