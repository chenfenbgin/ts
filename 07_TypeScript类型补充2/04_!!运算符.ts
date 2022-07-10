const message = "Hello World";

// 方式一： 将 message 转成布尔类型
// const flag = Boolean(message)
// console.log(flag)

// 方式二： 等同于方式一的效果
const flag = !!message;
console.log(flag);
