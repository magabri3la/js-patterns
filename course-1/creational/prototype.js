const dog = {
  species : 'dog',
  bay : function (name) {
    console.log(`Woff Woff!! I'm a ${this.species} and my name is ${name}`)
  }
}

const king = Object.create(dog);

king.bay('King');
king.species = "wolf";
king.bay('KING!');