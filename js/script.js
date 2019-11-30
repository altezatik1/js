//1 


function simpleNumber (num) {
  if( num < 2 ) return false;
  let count = 2;
  while(count < num) {
    if(num % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

function get100(max) {
  let i = 0;
  let list = [];

  while (i < max) {
    if(simpleNumber(i)) list.push(i);
    i++;
  }
  console.log(list);
}

get100(100);





//4

for (var i = 0; i < 9; i++, console.log(i)) {}


//5

var cc = "";
for(var i = 1; i < 20; i++) {
 cc = cc +"#";
console.log(cc)
}

