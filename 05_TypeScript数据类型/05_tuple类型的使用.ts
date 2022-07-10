// tuple元组: 多种元素的组合
// "why" 18 1.88

// 1.数组的弊端： 无法确定拿到的元素是一个什么样的类型
// const info: any[] = ["why", 18, 1.88]

// const infoObj = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// const name = info[0] // 取出来是报错的，
// console.log(name.length)//any类型调用.length是不安全的

// 2.元组的特点
const info: [string, number, number] = ["why", 18, 1.88];
const name = info[0];
console.log(name.length);
// const age = info[1]
// console.log(age.length)

export {};
