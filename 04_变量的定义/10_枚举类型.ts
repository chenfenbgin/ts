// 枚举类型
// enum 枚举名 {
//   标识符[=整形常数],
//   标识符[=整形常数],
//   ...
//   标识符[=整形常数],
// };

// 1. pay_status 0 未支付 1 支付 2 交易成功
enum Flag {
  success = 1, 
  error = -1 
}
let f:Flag = Flag.success
console.log('f',f)


// 2. 如果不赋值的话，值就是索引值(官方例子)
enum Color {
  red, blue, orange=5, yellow // yellow索引值从上一个5开始，也就是6
}
let c:Color = Color.red
console.log('c',c)// 输出 0
