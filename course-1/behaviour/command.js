// Nos entrega una interfaz unificada para poder ejecutar los metodos de un objeto
// en particular, de este modo en lugar de llamar a un metodo en particular lo que
// hacemos es llamar a una interfaz o metodo al cual indicaremos cual es el metodo
// o funcion que queremos ejecutar seguido de los argumentos.

const Commander = (() => {
  const o = {
    buy : x => {
      console.log(`Buying ${x}`);
    },
    sale : x => {
      console.log(`Selling ${x}`);
    }
  };

  return {
    run : (command, args) => {
      if(!o[command]) return console.log('Not Found This Command');
      
      o[command](args);
    }
  }
})();

Commander.run('buy', 'Pickles');
Commander.run('say', 'Hello');

// De este modo podemos desacoplar codigo 