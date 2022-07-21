function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象函数可以没有实现体
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  // 抽象方法，子类必须实现
  getArea() {
    return this.r * this.r * 3.14;
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));
// makeArea(new Shape()) // 报错，因为抽象类不能实例化

// makeArea(123)
// makeArea("123")
