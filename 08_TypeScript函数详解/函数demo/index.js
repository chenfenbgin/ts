// es5定义函数的写法
// 1. 函数声明法
function run() {
    console.log("run");
}
run();
// 2. 匿名函数法
var run2 = function () {
    return "run2";
};
run2();
// ts
function run3() {
    console.log("run");
    return 1243;
}
run();
// 3.1 方法可选参数
// 3.1.1 es5里面方法的实参和形参可以不一样，但是ts中必须一样，否则就得配置可选参数
function getInfo(name, age) {
    if (age) {
        return "".concat(name, " ----").concat(age);
    }
    else {
        return "".concat(name, "-\u5E74\u9F84\u4FDD\u5BC6.");
    }
}
alert(getInfo("zhangsan"));
// 3.2
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return "".concat(name, " ----").concat(age);
    }
    else {
        return "".concat(name, "-\u5E74\u9F84\u4FDD\u5BC6.");
    }
}
alert(getInfo("zhangsan"));
// 3.3 三点运算符 接受形参传过来的值
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    return result.reduce(function (pre, val) {
        return pre + val;
    }, 0);
}
sum(1, 2, 3, 4);
