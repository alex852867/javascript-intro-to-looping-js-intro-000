function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i < 2) {
      array.push('I am '+ i +' strange loop.') }
      else {
        array.push('I am '+ i +' strange loops.')
    }
  }
return array
}


function whileLoop(number) {
    let countdown = number;
    while (countdown > 0) {
        console.log(--countdown)
    }
    return 'done'
}
var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run regardless");
  } while (incrementVariable() < num)
}
