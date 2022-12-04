const users = [
  { age : 17, name : 'Sofia', lastName : 'Smith' },
  { age : 18, name : 'Michael', lastName : 'Sha' },
  { age : 2, name : 'Max', lastName : 'Turner' },
  { age : 1, name : 'Emily', lastName : 'Adams' },
];

// const getFirstChild = data => {
//   const children = data.filter(x => x.age < 2);
//   const firstBaby = children[0];
//   const baby = {
//     name : `${firstBaby.name} ${firstBaby.lastName}`,
//     age : firstBaby.age
//   }

//   return `${baby.name} has ${baby.age} year(s)`
// };

// console.log(getFirstChild(users));

/*
  Una composicion de funciones seria ->
*/

const head = xs => xs[0];

const formatObject = x => ({
  name : `${x.name} ${x.lastName}`,
  age : x.age
});

const stringFormat = x => `${x.name} has ${x.age} year(s)`;

// const getFirstChild = data => stringFormat(formatObject(head(data.filter(x => x.age <= 2))));


/*
  y una mejor composicion para nuestra composición de funciones seria ->
*/

const filter = fn => xs => xs.filter(fn);
const conditionFilterChild = x => x.age <= 2;

const compose = (...fns) => x => fns.reduceRight((fnAcu, fnIte) => fnIte(fnAcu), x);
const pipe = (...fns) => x => fns.reduce((fnAcu, fnIte) => fnIte(fnAcu), x);
const trace = x => y => console.log(x,y); // para debuggear
/* De este modo vemos que hace nuestro codigo y no como lo hace */
const getFirstChild = pipe(
  filter(conditionFilterChild),
  head,
  formatObject,
  stringFormat,
  // trace('despues de stringFormat')
)

getFirstChild(users);
