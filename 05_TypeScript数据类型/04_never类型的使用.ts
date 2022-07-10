// 1、这个函数永远也不会有返回的结果，就写上never类型
// function foo(): never {
//   // 死循环
//   while(true) {

//   }
// }

// 2、如果一个函数直接抛出异常，那它的返回值就是never
// function bar(): never {
//   throw new Error()
// }

// 提前
// 3、never的应用： 封装一个核心函数
function handleMessage(message: string | number | boolean) {//联合类型
  switch (typeof message) {
    case "string":
      console.log("string处理方式处理message");
      break;
    case "number":
      console.log("number处理方式处理message");
      break;
    case "boolean":
      console.log("boolean处理方式处理message");
      break;
    default:
      const check: never = message;
  }
}

handleMessage("abc");
handleMessage(123);

// 张三
handleMessage(true);
