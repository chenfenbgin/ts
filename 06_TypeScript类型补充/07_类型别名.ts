// 对象类型看其他太长了，可以是使用type

// type用于定义类型别名(type alias)
type IDType = string | number | boolean;
type PointType = {
  // 这里可以使用，| : ,也可以不写
  x: number;
  y: number;
  z?: number;
};

function printId(id: IDType) {}

function printPoint(point: PointType) {}
