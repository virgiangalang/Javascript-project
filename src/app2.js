//foreach

const animals = ["kucing", "anjing", "babi", "kudanil", "ayam"];

animals.forEach(myFunction);

function myFunction(value) {
  console.log(value + " hidup");
}

const numbers = [10, 20, 30, 40, 50, 60, 70];
const multipliedNumber = numbers.map(multiply);
function multiply(value) {
  return value * 2;
}

console.log(multipliedNumber);
