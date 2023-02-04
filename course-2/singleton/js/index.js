/*
  El objetivo del patron Singleton es que solo exista un objeto de nuestra clase, es decir, que no se puedan crear mas de una instancia de la clase.

  Es un patron creacional, es una forma de crear objetos. Podemos utilizarlo cuando nuestra de la informacion de un objeto nunca va a cambiar, es decir, cuando no necesitamos mas de una instancia de la clase.
*/

/*
  Cuando escribimos this.algo estamos creando una propiedad en el objeto
  Cuando escribimos el NombreDeLaClase.algo le pertenece a la clase, es decir, es una propiedad estatica.
*/


class Singleton {

  static getInstance () {
    return Singleton.instance;
  }

  constructor() {

    this.random = Math.random();

    if(Singleton.instance) {  // evaluacion de si existe una instancia de la clase
      return Singleton.instance
    }

    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3);
console.log(singleton === singleton2);
console.log(singleton3 === singleton2);


/*
  CASO PRACTICO
*/

class WeekDays {
  static daysEs = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  static daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor (language) {
    this.language = language;

    if(WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays () {
    return this.language === 'es' ? WeekDays.daysEs : WeekDays.daysEn;
  }
}

const weekDaysEs = new WeekDays('en');
const weekDaysEs2 = new WeekDays();

console.log(weekDaysEs.getDays());
console.log(weekDaysEs2.getDays());

