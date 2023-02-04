class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance() {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS();
    }
    return SingletonTS.instance;
  }
}

const instance1 = SingletonTS.getInstance();
const instance2 = SingletonTS.getInstance();
console.log(instance1.random, instance2.random);
console.log(instance1 === instance2);

instance1.random = 7;

console.log(instance1.random, instance2.random);
console.log(instance1 === instance2);

