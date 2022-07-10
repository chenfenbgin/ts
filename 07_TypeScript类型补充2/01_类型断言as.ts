// <img id="why"/>

// 1.类型断言 as
const el = document.getElementById("why") as HTMLImageElement;
el.src = "url地址"; // 如果不加断言， 这里会报错

// 2.另外案例: Person是Student的父类
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  // 使用断言转成学生，才可以调用学生类里面的方法
  (p as Student).studying();
}

const stu = new Student();
sayHello(stu);

// 3.了解: as any/unknown
const message = "Hello World";
// const num: number = (message as unknown) as number // 不推荐这么做👈
