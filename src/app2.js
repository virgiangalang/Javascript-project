//foreach

const age = [14, 17, 8, 11, 30, 27, 21, 35, 48];
const filteredAge = age.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(filteredAge);
