function sum (a,b) {
  return a+b;
}

let res = sum(1,2);
console.log(res)

/*
Una function de primer orden es toda funcion que pueda ser tratada como una variable, esta variable puede guardar una funcion, puede ejecutar una funcion y puede ser enviada como parametro a otras funciones
*/

const fSum = sum;
res = fSum(5,6);
console.log(res)

/*
una funcion de orden superior es toda funcion que puede recibir en parametros funciones
*/

function operation (fn, a, b) {
  console.log('Se hace algo')
  console.log(fn(a,b));
}

operation(sum, 10, 20);

operation((a, b) => a * b, 5, 5);

operation((a, b) => {
  const c = a + b;
  return c * 2;
}, 1, 2)

/*
  Metodos nativos
*/

// foreach -> es inmutable -> la colección original no cambia
const names = ["Héctor", "Juan", "Pablo", "Analu"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toLocaleUpperCase()));

// sort -> es mutable -> modifica la coleccion original
names.sort();

// map -> regresa un nuevo array modificando valores

const namesUpper = names.map((name) => name.toLocaleUpperCase());

console.log(namesUpper);
console.log(names);


// reduce -> recorre todos los elementos y hace un acumulado
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((ac, number) => ac + number, 0);
const namesConcat = names.reduce((ac, name) => ac + `${name} `, "Teresa ");
console.log(namesConcat);
console.log(total);

