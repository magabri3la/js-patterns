interface ISubject <T> {
  observers: IObserver<T>[];
  suscribe(observer : IObserver<T>) : void;
  unsuscribe(observer : IObserver<T>) : void;
  notify(value : T) : void;
}

interface IObserver <T> {
  refresh(value : T) : void;
}

class SubjectTS <T> implements ISubject <T> {
  observers: IObserver<T>[] = [];

  suscribe(observer : IObserver<T>) : void {
    this.observers.push(observer);
  }
  unsuscribe(observer : IObserver<T>) : void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  notify(value : T) : void {
    this.observers.forEach(obs => obs.refresh(value));
  }
}

class ObserverTS <T> implements IObserver <T> {
  private fn : (value : T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value : T) : void {
    this.fn(value);
  }
}

const subjectTS = new SubjectTS <number>();
const observer1TS = new ObserverTS <number>(value => console.log('hello world: ' + value));
const observer2TS = new ObserverTS <number>(value => console.log('hi world: ' + value));

subjectTS.suscribe(observer1TS);
subjectTS.suscribe(observer2TS);

subjectTS.notify(1);
subjectTS.notify(120);

const subjectStringTS = new SubjectTS <string>();
const observerString1TS = new ObserverTS <string>(value => console.log('hello world: ' + value.toUpperCase()));
const observerString2TS = new ObserverTS <string>(value => console.log('hello world: ' + value.toLowerCase()));

subjectStringTS.suscribe(observerString1TS);
subjectStringTS.suscribe(observerString2TS);

subjectStringTS.notify('NalitA');