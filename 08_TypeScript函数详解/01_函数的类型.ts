// 1.函数作为参数时, 在参数中如何编写类型
function foo() {} //当前函数是有类型的

// 2. 函数作为参数，类型应该是 () => void
type FooFnType = () => void;
function bar(fn: FooFnType) {
  fn();
}

bar(foo);

// 2.定义常量时, 编写函数的类型
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2;
};
