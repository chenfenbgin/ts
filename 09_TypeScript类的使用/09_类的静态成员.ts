// class Person {
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()
// p.name = "123"

class Student {
  static time: string = "20:00";

  static attendClass() {
    console.log("去学习~");
  }
}

// 访问，不需要new出来一个对象
console.log(Student.time);
Student.attendClass();
