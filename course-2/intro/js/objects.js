
// Programaciín ORIENTADA A OBJETOS

/*
  Una clase es un molde el cual sirve para estructurar un objeto, con un conjunto de propiedades y metodos.
*/

//class

// class Drink {
//   constructor(name){
//     this.name = name;
//   }

//   info(){
//     return `This is ${this.name}`;
//   }
// }

// const drink = new Drink("water");

// console.log(drink.info());

/*
 En javascript toda funcion es un objeto, por lo tanto podemos crear una funcion constructora
*/

function Drink2 (name) {
  this.name = name;
  this.info = function () {
    return `This is ${this.name}`;
  }
}

const drink2 = new Drink2("Lemonade");

console.log(drink2.info());

// herencia 

/*
  La herencia nos sirve para rehutilizar codigo, en este caso la clase Beer hereda de la clase Drink
*/

// class Beer extends Drink {
//   constructor(name, alcohol) {
//     super(name); // super nos sirve para llamar al constructor de la clase padre
//     this.alcohol = alcohol;
//   }

//   info(){
//     return `${super.info()} ${this.alcohol}` 
//   }
// }

// const beer = new Beer("beer", "8.5%")

// console.log(beer.info())