function stringSplitter(str,separator){
  if (!str.includes(separator)){
    return str
  }
  return [str.slice(0,str.indexOf(separator))].concat(stringSplitter(str.slice(str.indexOf(separator)+1),separator))
}

console.log(stringSplitter('dog/cat/mouse','/'))
console.log(stringSplitter('02/20/2020','/'))