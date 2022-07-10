// Point: x/y/z -> 对象类型
// {x: number, y: number, z?: number}
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z); // 别人没有传，这里打印的是 undefined
}

printPoint({ x: 123, y: 321 });
printPoint({ x: 123, y: 321, z: 111 });

export {};
