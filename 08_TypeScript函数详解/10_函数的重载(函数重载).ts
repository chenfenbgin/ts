// 这么写的话，相当于a1, a2都是any类型
// function sum(a1, a2) {
//   return a1 + a2;
// }

// TS特有的函数重载实现，上面写函数重载，下面写具体的实现
// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
function add(num1: number, num2: number): number; // 没函数体
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1.length + num2.length;
  }
  return num1 + num2;
}

const result = add(20, 30);
const result2 = add("abc", "cba");
console.log(result);
console.log(result2);

// 如果调用的时候，没有匹配到👆重载的函数，也是无法调用函数体的，会报错
// 在函数的重载中, 实现函数是不能直接被调用的
// add({name: "why"}, {age: 18})

export {};
