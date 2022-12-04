
/*
El decorador toma todas las instancias de una clase y les va agregar
nuevas funcionalidades
*/

// class MacBook {
//   constructor () {
//     this.precio = 1000;
//     this.pantalla = 11.6;
//   }
// }

// const macbook = new MacBook();

// macbook.agregarMemoria = function () {
//   this.precio += 100
// }

// macbook.agregarMemoria();

// console.log(macbook.precio)


/*
Otro modo de hacer lo mismo
*/

class MacBook {
  precio () {
    return 1000;
  }
}

const upgradeMemoria = macbook => {
  const value = macbook.precio();
  macbook.precio = function () {
    return value + 200;
  };
}

const macbook = new MacBook();
upgradeMemoria(macbook);

console.log(macbook.precio())


