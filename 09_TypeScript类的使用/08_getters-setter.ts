class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 1、可以使用getName 和 setName方法

  // 2、访问器setter/getter
  // setter
  set name(newName) {
    this._name = newName;
  }
  // getter
  get name() {
    return this._name;
  }
}

const p = new Person("why");
p.name = "coderwhy"; // setter访问器

// 如果我们使用的是setName这种方式，调用name是这么调用的：
// p.setName(newName);
console.log(p.name); // getter访问器

export {};
