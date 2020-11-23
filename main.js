let array = [];
let length = 100;

for (let i = 0; i < length; i++){
  array.push(Math.floor( Math.random() *100 ) + 1);
}

var random10 = array.filter( function( random ){
  return random % 10 == 0;
})
console.log(random10);
