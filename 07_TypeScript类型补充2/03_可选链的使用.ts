// 可选链是javascript里的东西， ES11
type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFriend?: {
      name: string;
    };
  };
};

const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
    girlFriend: {
      name: "lily",
    },
  },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend!.name) //如果friend没有值，这里会 报错

// ?如果没有，后面的代码是不会执行的， 返回的是undefined
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);

// if (info.friend) {
//   console.log(info.friend.name)

//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }
