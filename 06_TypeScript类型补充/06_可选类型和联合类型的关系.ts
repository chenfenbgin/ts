// 1、让一个参数本身是可选的
// 一个参数一个可选类型的时候, 它其实类似于是这个参数是 类型|undefined 的联合类型
// function foo(message?: string) {
//   console.log(message)
// }

// 👆的写法  = 下面的写法, 但是必须明确的传入undefined
// function foo(message: string | undefined) {
//   console.log(message)
// }
// foo(undefined)

function foo(message?: string) {
  console.log(message);
}

foo();
