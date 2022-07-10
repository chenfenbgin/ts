// message? -> undefined | string
function printMessageLength(message) {
    // if (message) { // if判断相当于类型缩小了
    //   console.log(message.length)
    // }
    // vue3源码
    console.log(message.length);
}
printMessageLength("aaaa");
printMessageLength("hello world");
