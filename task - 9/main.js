function arrNumber() {
  var arr = ['234', '176', '502', '306', '412'];
  return arr;
}
var view = ' ';
var flag;
string = arrNumber();
string = string.toString();
string = string.replace(/[.]/g, ' ');
length = string.length;
for (var i = 0; i <= length;  i++) {
var n=string.charAt(i);
if (n % 2 == 0) {view = view + n + " ";}
else{view = view +n;}
}
view =view.trim();

var arr=view.split(' ');

console.log(arr);



