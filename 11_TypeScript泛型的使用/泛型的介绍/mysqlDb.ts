//  操作数据库： add delete update query

interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): number;
}

// 定义一个操作mysql数据库的类
// 注意：要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): number {
    throw new Error("Method not implemented.");
  }
}
class User {
  username: string | undefined;
  password: string | undefined;
}
let u = new User();
u.username = '张三'
u.password = '12345'

// 类作为参数来约束数据传入的类型
let mysql = new MysqlDb<User>();
mysql.add(u)