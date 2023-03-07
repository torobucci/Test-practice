function stringLength(str) {
  if(!str.length>0){
    throw ("You haven't inputed any character")
  }
  if(str.length>10){
    throw ("String should not have more than 10 charachters")
  }
  return str.split("").length;
}
function reverseString(str){
  let newStr = ''
  for(let i=str.length-1;i>=0;i--){
    newStr+=str[i]
  }
  
  return newStr
  }
  class Calculator{
    add(a,b){
     return a + b
    }
    subtract(a,b){
      return a-b
    }
    divide(a,b){
      return a/b
    }
    multiply(a,b){
      return a*b
    }
  }
  const calc = new Calculator
  function capitalize(str){
    if(typeof(arguments[0])!=='string'){
      throw('argument should be a string')
    }
    else{
      return str[0].toUpperCase()+str.slice(1)
    }
    
   }
module.exports = {stringLength,reverseString,calc,capitalize};
