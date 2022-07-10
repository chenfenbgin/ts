// number|string 联合类型
function printID(id: number | string | boolean) {
  // 使用联合类型的值时, 需要特别的小心
  // narrow: 缩小， 本来id的类型是3中，在if里面可以缩小类型范围
  if (typeof id === "string") {
    // 来到这里的，一定是string类型
    // TypeScript帮助确定id一定是string类型。
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID("abc");
printID(true);
