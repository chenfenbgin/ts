class Person {
  // 1. TS中必须进行初始化
  // name: string = '';
  // age: number = 18;

  // 2.使用构造器的方式 进行 初始化
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " eating");
  }
}

const p = new Person("chen", 23);
p.eating();

export {};
