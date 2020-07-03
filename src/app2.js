//Scope

const name = "Budi Subsidi"; //global scope

function myFunction() {
  // const name = "Virgian Galang";

  function insideFunc() {
    console.log(name);
  }
  insideFunc();
}

myFunction();
