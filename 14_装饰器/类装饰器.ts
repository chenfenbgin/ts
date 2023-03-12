// 1. 类装饰器：应用于类构造函数，可以用来监视，修改或者替换类定义
// 在不改变类的前提下，给类添加方法 属性

// 2. 装饰器： 普通装饰器
function logClass(params: any) {
  console.log("params", params);

  // params 就是当前类
  params.prototype.apiUrl = "动态扩展的属性";
}

//调用装饰器： 使用@
@logClass
class HttpClient {
  constructor() {}
  getData() {}
}

let http: any = new HttpClient();
console.log("http.apiUrl", http.apiUrl);

// 2. 装饰器工厂
function logClass2(params: string) {
  return function (target: any) {
    console.log(target);
    console.log(params); // hello
  };
}

@logClass2("hello")
class HttpClient2 {
  constructor() {}
  getData() {}
}


function logClass3(target: any) {
  return class extends target {
    apiUrl:any = 'aixiu'
    getData(){
      console.log(this.apiUrl)
    }
  }
}
// 3. 装饰器修改构造函数
@logClass3
class HttpClient3 {
  public apiUrl:string | undefined;
  constructor() {
    this.apiUrl = 'chenfeng'
  }
  getData(){
    console.log(this.apiUrl)
  }
}