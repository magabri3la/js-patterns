/*
   Mediante una funcion, objeto o clase podremos acceder a dos metodos
   next, value y saber si terminamos de iterar una coleccion.  

   function* -> funcion generadora
*/

function* iterator (col) {
  var nextIndex = 0;

  while(nextIndex < col.length) {
    yield col[nextIndex++]
  };
};

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gen = iterator(x);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
