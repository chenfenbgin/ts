let message: string = 'hello typescript'
// message = 122//报错

function foo(payload: string) {
  console.log(payload.length)
}

// foo(123)
foo("aaa")
