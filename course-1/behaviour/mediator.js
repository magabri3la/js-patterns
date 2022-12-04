/*
  Funciona similar al observador pero la diferencia principal 
  es que hay un objeto nuevo que hace la funcion de mediador.
*/

// const Emitter = (() => {
//   const topics = {};
//   const hOP = topics.hasOwnProperty;

//   return {
//     on : (topic, listener) => {
//       if(!hOP.call(topics, topic)) topics[topic] = [];
//       topics[topic].push(listener); 
//     },
//     emit : (topic, info) => {
//       if(!hOP.call(topics, topic)) return;
//       topics[topic].forEach(item => 
//         item(info != undefined ? info : {}));
//     }
//   }
// })();

// Emitter.on('lala', x => console.log(x));
// Emitter.emit('lala', { lala : 'lolo' });


/*
NODE
*/

const Emitter = require('events');

const emitter = new Emitter();

emitter.on('teresa', x => console.log(x));
emitter.emit('teresa', { teresa : 'node' });
