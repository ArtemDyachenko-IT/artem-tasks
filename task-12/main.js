function arrError() { 
  var arr = ['John!', 'what!', 'are!', 'you!', 'doing!?']; 
  return arr; 
 }
 
 for(var i of arrError()){
  console.log(i.replace('!',','))
 }

