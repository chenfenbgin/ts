// 1、通过类型type 别名来声明对象类型
// type InfoType = { name: string, age: number}

// 2、另一种方式声明对象类型： 接口interface
// 这种写法 等同 👆的写法
// 在其中可以定义 可选类型
// 也可以定义 只读属性
interface IInfoType {
  readonly name: string;
  age: number;
  friend?: {
    name: string;
  };
}
const info: IInfoType = {
  name: "chen",
  age: 23,
  friend: {
    name: "xiu",
  },
};

console.log(info.friend?.name);
console.log(info.name);
info.name = "shaliy"; // 报错，只读属性不可以重新赋值
info.age = 33; // age可以修改
