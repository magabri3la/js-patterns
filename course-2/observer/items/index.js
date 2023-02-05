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

class ItemSubject extends Subject{

  constructor() {
    super();
    
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    this.notify(this.items);
  }
}

class HTMLElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((ac, item) => ac + `<li>${item}</li>`, '');
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

const itemsSubject = new ItemSubject();
const divObserver1 = new HTMLElementObserver(div1);
const divObserver2 = new HTMLElementObserver(div2);
const observer1 = new Observer(data => {
  div3.innerHTML = data.length;
});

itemsSubject.suscribe(divObserver1);
itemsSubject.suscribe(divObserver2);
itemsSubject.suscribe(observer1);

function add() {
  const name = txtName.value;
  itemsSubject.addItem(name);
  txtName.value = '';
}
