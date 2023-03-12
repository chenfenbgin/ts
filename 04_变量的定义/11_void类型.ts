// void类型：typescript中的void表示没用任何类型，一般用在定义方法的时候方法 没有返回值

// es5
function run(){
  console.log(' ', )
}

run()

// typescript
function run2():void {
  console.log('run2')
}
run2()