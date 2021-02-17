function countSheep(numberOfSheep){
  if(numberOfSheep === 0){
    return 'All sheep jumped over the fence' 
  }else{
    console.log(`${numberOfSheep}: Another sheep jumps over the fence`)
  }
  return countSheep(numberOfSheep-1)
}

console.log(countSheep(3))