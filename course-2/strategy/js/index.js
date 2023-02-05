/*
  Este patron nos ayuda a poder tener comportamientos distintos en un objeto, poder agregar nuevas funcionalidades sin tener que modificar el objeto original.
*/

class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {

  constructor (tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + (amount * this.tax);
  }
}

class DiscountSaleStrategy {
  
    constructor (tax, discount) {
      this.tax = tax;
      this.discount = discount;
    }
  
    calculate(amount) {
      return amount + (amount * this.tax) - this.discount;
    }
}

class ForeignSaleStrategy {

  calculate(amount) {
    return amount * this.getDollarPrice()
  }

  getDollarPrice() {
    return 20
  }
}

// const regularSale = new RegularSaleStrategy(0.16);
// const discountSale = new DiscountSaleStrategy(0.16, 3);
// const foreignSale = new ForeignSaleStrategy();
// const sale = new SaleContext(discountSale);

// console.log(sale.calculate(10));
// sale.setStrategy(discountSale);
// console.log(sale.calculate(10));
// sale.setStrategy(foreignSale);
// console.log(sale.calculate(10));

/*
  El patron estrategoia nos sirve cuando vamos a cambiar de estrategia en tiempo de ejecucion, por ejemplo si tenemos un carro y queremos que se mueva de una forma y luego de otra, podemos cambiar la estrategia de movimiento del carro en tiempo de ejecucion.
*/

// Caso practico

const data = [
  {
    name: 'Corona',
    country: 'Mexico',
    info: 'Corona is a Mexican beer brand owned by Constellation Brands. It is the best-selling beer in Mexico and the third best-selling beer in the United States. Corona is a pale lager with 4.6% alcohol by volume. It is brewed in Mexico and the United States.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Corona_Beer_Logo.svg/1200px-Corona_Beer_Logo.svg.png'
  },
  {
    name: 'Budweiser',
    country: 'USA',
    info: 'Budweiser is an American-style pale lager produced by Anheuser-Busch, a subsidiary of Anheuser-Busch InBev. Budweiser is the best-selling beer in the United States, and is brewed in 12 countries and distributed in more than 80.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Budweiser_logo.svg/1200px-Budweiser_logo.svg.png'
  },
  {
    name: 'Heineken',
    country: 'Netherlands',
    info: 'Heineken is a Dutch beer brand, originated in 1864 by Gerard Adriaan Heineken in Amsterdam. Heineken is the world\'s most international brewer, with more than 165 breweries in more than 70 countries. It is also the world\'s most valuable beer brand.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Heineken_logo.svg/1200px-Heineken_logo.svg.png'
  }
];

class InfoContext {
  constructor(strategy, data, element){
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show(){
    this.strategy.show(this.data, this.element);
  }
}

class listStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return ac + `
        <div class="beer">
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
        </div>
        <hr>`;
    }, '');
  }
}

class listDetailStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return ac + `
        <div class="beer">
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
          <p>${beer.info}</p>
        </div>
        <hr>`;
    }, '');
  }
}

class ListWithImages {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return ac + `
        <div class="beer">
          <img src="${beer.image}" alt="${beer.name}" width="10%">
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
        </div>
        <hr>`;
    }, '');
  }
}

const info = new InfoContext(new listStrategy(), 
data, content);
info.show();

const strategies = [
  new listStrategy(),
  new listDetailStrategy(),
  new ListWithImages()
]

slcOptions.addEventListener('change', (e) => {
  info.setStrategy(strategies[e.target.value]);
  info.show();
});
