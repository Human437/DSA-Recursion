function powerCalculator(base,exponent){
  if (exponent <= 0){
    return 'exponent should be >= 0'
  }
  if(exponent === 1){
    return base
  }
  return base * powerCalculator(base,exponent-1)
}

console.log(powerCalculator(10,2))
console.log(powerCalculator(10,-2))
console.log(powerCalculator(5,3))