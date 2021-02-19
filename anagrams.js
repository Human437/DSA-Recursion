function anagram(prefix,string){
  if (string.length <= 1){
    console.log( prefix + string)
  }else{
    for(let i=0;i<string.length;i++){
      let current = string.slice(i,i+1)
      let before = string.slice(0,i)
      let after = string.slice(i+1)
      anagram(prefix+current,before+after)
    }
  }
}

console.log(anagram('','east'))