"use strict";
exports.__esModule = true;
// 1.类型注解
// 2.var/let/const
// 3.string和String的区别
// 4.类型推导
var name = "why";
var age = 18;
var height = 1.88;
// 小写string: TypeScript中的字符串类型
// 大写String: JavaScript的字符串包装类的类型
var message = "Hello World";
// 默认情况下进行赋值时, 会将赋值的值的类型, 作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
var foo = "foo";
