//var dan let
function foo() {
  let fooVar = "bar";
  console.log("didalam func " + fooVar);
  return fooVar;
}
foo();

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
