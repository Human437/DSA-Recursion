function fibonacci(num){
  if (num-1 === 0){
    return num
  }
  if (num-2 === 0){
    return num -1
  }
  return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(7))