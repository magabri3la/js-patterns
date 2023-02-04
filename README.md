# Patrones de diseño

> Son tecnicas con las que puedes resolver cierto problema, te evitan crear soliciones cuando la solución ya existe y esta comprobada.
Hay patrones de diseño creacionales, estructurales y de comportamiento.
No son complejos pero abarcan muchas cosas y si los entiendes vas a tener algo abreviado en tu cabeza con lo que podras identificar que patron calza como solución a ciertos requerimientos y no tener que reinventar la rueda.



## Funciones de Primer Orden y Orden Superior

Una función de __Primer Orden__ es una función que puede ser tratada como una variable, esta variable puede guardar una función, ejecutarla y ser enviada como parametro a otras funciones.

```
function sum (a,b) {
  return a+b;
}

let res = sum(1,3);

const fSum = sum;

res = fSum(5,6);
```

Una función de __Orden Superior__ es toda función que puede recibir en parametros funciones.

```
function operation (fn, a, b) {
  return fn(a,b)
}

operation(fSum, 10, 20);
```

## Arrow function

Es una forma de expresión de función anonima en javascript

```
let fA = function () {
  console.log('sucede algo');
}
```

Lo mismo pero con arrow function

```
let fA = () => console.log('sucede algo');

```
```
operation((a,b)=>a*b, 5, 5);

```

