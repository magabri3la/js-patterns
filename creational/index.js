
// class MiClase {
//   constructor(p1, p2) {
//     this.propiedad = p1
//     this.propiedad_2 = p2
//   }

//   method() {
//     console.log('spy un metodo')
//   }
// }

// const instancia = new MiClase(3,2);
// console.log(instancia)


// Object.prototype.log = function () {
//   console.log(this);
// }

// const x = { a : 1 }

// x.log()

// if(!String.prototype.trim) {
//   String.prototype.trim = function () {
//     try {
//       return this.replace(/^\s+|\s+$/g, "")
//     }
//     catch (e) {
//       return this
//     }
//   }
// }

// const y = "        lalala     ".trim();

// y.log();

// // patron modulo : tienen metodos y propiedades

// const modulo = {
//   prop: 'prop',
//   config: {
//     lenguaje: 'es',
//     cache: true
//   },
//   setConfig : conf => {
//     modulo.config = conf
//   },
//   isCacheEnabled: () => {
//     console.log(modulo.config.cache ? 'si' : 'no')
//   }
// }

// patron modulo revelador

const resultado = (() => {
  const x = {};

  return {
    a : () => console.log(x),
    b : (key, val) => x[key] = val,
    c : t
  }
})();

resultado.a();
resultado.b('success', false)
resultado.a();


