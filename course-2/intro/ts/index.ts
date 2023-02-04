// Super set de javascript : tipos y modificadores de acceso
class Drink {
  private name: string
  constructor(name : string) {
    this.name = name;
  }

  info(): string {
    return this.name
  }
}

const drink = new Drink("Malta");

console.log(drink.info());

class Tea extends Drink {
  private temp : string;

  constructor (name : string, temp : string) {
    super(name);
    this.temp = temp;
  }

  info(): string {
    return `This is a ${this.temp} ${super.info()}`; 
  }
}

const tea = new Tea("Jink", "cold");

console.log(tea.info());

/*
  Interfaces: nos permite categorizar objetos, podemos definir que propiedades y metodos debe tener un objeto,como consecuencia ese objeto puede tener un comportamiento ya esperado porque implementa una interfaz, asi que podemos ver la interfaz como un contrato que debe cumplir un objeto.
*/

interface Product {
  price: number;
  getPrice(): string;
}

class Malta extends Drink implements Product {
  private alcohol: boolean;
  price: number;

  constructor(
    name : string, 
    price : number, 
    alcohol : boolean) {
    super(name);
    this.price = price;
    this.alcohol = alcohol;
  }

  getPrice(): string {
    return `The price is ${this.price}`;
  }
};

class Snack implements Product {
  name: string;
  price: number;

  constructor(name: string, price : number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return `$ ${this.price}`;
  }
}

const products: Product[] = [
  new Snack("Chips", 10),
  new Malta("Mr.German", 20, true),
  new Snack("Chocolates", 15),
]

function getPrices(products: Product[]) {
  products.forEach(product => {
    console.log(product.getPrice());
  })
}

getPrices(products);