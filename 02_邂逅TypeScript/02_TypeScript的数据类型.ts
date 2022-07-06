const name: string = "abc"
const age: number = 18

console.log(name)
console.log(age)

// 如果不加export，在其他ts文件中，如果有👆相同的属性(如name),回报错
// export 导出一个对象，这样就相当于一个模块，有自己的作用域
export {}
