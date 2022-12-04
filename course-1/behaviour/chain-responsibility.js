// Se basa en encapsular un dato e ir agregandole metodos para ir alterando el valor
// que este contiene

class Suma {
  constructor (v = 0) {
    this.val = v;
  }

  suma(v) {
    this.val += v;
    return this;
  }
}

const valor = new Suma(1);

console.log(valor
  .suma(1)
  .suma(2)
  .suma(3)
  .suma(4)
  .val)