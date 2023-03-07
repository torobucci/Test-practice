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
module.exports = {stringLength,reverseString};
