// 1. ts里面定义方法，只能返回string类型的数据
function getData(value: string): string {
  return value;
}

// 2. 想要同时返回string类型 和 string类型
//    如果使用了any，相当于放弃了类型检查，传入什么，返回什么。
function getData1(value: any): any {
  return value;
}

// 3. 使用泛型: 可以支持不特定的类型，要求传入的参数类型和返回的参数类型一致
// T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData2<T>(value: T): T {
  return value;
}

console.log(getData2<number>(123));
console.log(getData2<string>("123"));

// 4. 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型，可以通过类的泛型实现
// 4.1 
class MinClass {
  public list: number[];
  add(num: number) {
    this.list.push(num);
  }
  min(): number {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

class MinClass2 {
  public list: number[];
  add(num: number) {
    this.list.push(num);
  }
  min(): number {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

// 4.2 类的泛型
class Min<T>{
  public list:T[]; 
  add(num: T):void {
    this.list.push(num);
  }
  min(): T {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum
  }
}

let m1 = new Min<number>();
m1.add(1);
m1.add(2);
m1.add(3);
console.log(m1.min());

let m2 = new Min<string>();
m2.add('1');
m2.add('2');
m2.add('3');
console.log(m2.min());

// 5. 泛型接口

// 5.1 ts函数接口定义
interface ConfigFn {
  // 定义一个方法
  (value1:string, value2:string):string;
}
// 实现ConfigFn
let setData:ConfigFn = function(value1:string, value2:string):string {
  return value1 + value2;
}
setData('chen', 'feng')

// 5.2 泛型接口
interface ConfigFn2 {
  <T>(value:T):T;
}
let getRecords:ConfigFn2 = function<T>(value:T):T {
  return value;
}
getRecords<string>('chen')
getRecords<number>(123)

// 泛型写法2
interface Config<T>{
  (value:T):T;
}
function getDatas<T>(value:T):T {
  return value
}
let myData:Config<string> = getDatas;
myData('20')

console.log('git暂存')
