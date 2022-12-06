// Super set de javascript : tipos y modificadores de acceso

console.log("hola desde TSc")
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