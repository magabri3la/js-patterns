
class Subject {
  constructor() {
    this.observers = []
  }

  suscribe(observer) {
    this.observers.push(observer)
  }

  unsuscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify(data) {
    this.observers.forEach(observer => observer.refresh(data))
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const subject = new Subject();
const observer1 = new Observer(data => console.log(`Observer 1: ${data}`));
const observer2 = new Observer(data => {
  div1.innerHTML = data;
})
const observer3 = new Observer(data => {
  div2.innerHTML = data.split('').reverse().join('');
})

itemsSubject.suscribe(divObserver1);
itemsSubject.suscribe(observer2);
itemsSubject.suscribe(observer3);

// subject.unsuscribe(observer3);

function change (event) {
  itemsSubject.notify(inputObv.value)
}
