function nthTriangleNumber(num){
  if (num === 1){
    return num
  }
  return num + nthTriangleNumber(num-1)
}

console.log(nthTriangleNumber(3))
console.log(nthTriangleNumber(5))
console.log(nthTriangleNumber(9))