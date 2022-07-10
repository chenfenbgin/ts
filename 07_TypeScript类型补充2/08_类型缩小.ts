// 1.typeof的类型缩小
type IDType = number | string;
function printID(id: IDType) {
  console.log(id); // id是联合类型
  if (typeof id === "string") {
    // 类型保护
    console.log(id.toUpperCase()); // id 是string类型
  } else {
    console.log(id); // id 是number类型
  }
}

// 2.平等的类型缩小(=== == !== !=/switch)
type Direction = "left" | "right" | "top" | "bottom";
function printDirection(direction: Direction) {
  // 1.if判断
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()
  // 2.switch判断
  // switch (direction) {
  //   case 'left':
  //     console.log(direction)
  //     break;
  //   case ...
  // }
}

// 3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

const stu = new Student();
work(stu);

// 4. in
type Fish = {
  swimming: () => void;
};

type Dog = {
  running: () => void;
};

function walk(animal: Fish | Dog) {
  if ("swimming" in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming");
  },
};

walk(fish);
