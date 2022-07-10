// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) { // if判断相当于类型缩小了
  //   console.log(message.length)
  // }
  // vue3源码
  console.log(message!.length); // ! 表示传过来的 message 一定有值
}

printMessageLength("aaaa");
printMessageLength("hello world");
