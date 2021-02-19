function binaryRepresentation(valueInBase10){
  if(valueInBase10 === 0){
    return ''
  }else{
    return binaryRepresentation(Math.floor(valueInBase10/2)) +(valueInBase10%2).toString()
  }
}

console.log(binaryRepresentation(7))