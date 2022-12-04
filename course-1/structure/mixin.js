/*
Nos ayuda a tomar una clase que ya existe y agregarle mas funcionalidad
sin necesidad de alterarla.

Todas las instancias que se generen de esta clase seguiran siendolo.
*/


/*
Metodos que queremos añadir a una clase en el futuro
*/
let mixin = {
  saludar () {
    console.log(`Hola ${this.nombre}`);
  },
  despedir () {
    console.log(`Chao ${this.nombre}`);
  }
}

class Usuario {
  constructor (nombre) {
    this.nombre = nombre;
  }

  caminar () {
    console.log('caminando...');
  }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Chachito feliz');
usuario.saludar();
usuario.caminar();
