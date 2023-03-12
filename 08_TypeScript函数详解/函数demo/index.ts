// es5定义函数的写法
// 1. 函数声明法
function run() {
  console.log("run");
}
run();

// 2. 匿名函数法
var run2 = function () {
  return "run2";
};
run2();

// ts
function run3(): number {
  console.log("run");
  return 1243;
}
run();

// 3.1 方法可选参数
// 3.1.1 es5里面方法的实参和形参可以不一样，但是ts中必须一样，否则就得配置可选参数
function getInfo(name: string, age?: number): string {
  if (age) {
    return `${name} ----${age}`;
  } else {
    return `${name}-年龄保密.`;
  }
}
alert(getInfo("zhangsan"));

// 3.2
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfo2(name: string, age?: number = 20): string {
  if (age) {
    return `${name} ----${age}`;
  } else {
    return `${name}-年龄保密.`;
  }
}
alert(getInfo("zhangsan"));

// 3.3 三点运算符 接受形参传过来的值
function sum(...result: number[]): number {
  let sum = 0;
  return result.reduce((pre, val) => {
    return pre + val;
  }, 0);
}
sum(1, 2, 3, 4); // 10

// 3.4 ts函数重载
// 3.4.1 es5中出现同名的方法，下面的方法会替换上面的
// function css(config) {

// }
// function css(config, value){

// }

// 3.4.2 ts中支持方法的重载
function getInform(name: string): string;

function getInform(age: number): number;

function getInform(str: any): any {
  if (typeof str === "string") {
    return name;
  } else {
    return 2;
  }
}
getInform(2);
getInform("chen");
