let message: string | null = null;
// let message: string | null = "Hello World";

const content = message ?? "你好啊, 李银河";

// 其实?? 跟 三目运算符一样
// const content = message ? message: "你好啊, 李银河"
console.log(content);
