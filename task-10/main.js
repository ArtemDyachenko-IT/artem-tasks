var str = 'BoMpWel'; 

var xChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
var yChar= "qwertyuiopasdfghjklzxcvbnm"

function reResult(x, y){
  result = ""
  for (var  i of x){
     if (y.includes(i)){
      result += i
     }
  }
  alert(result)
}

reResult(str, xChar)
reResult(str, yChar)



