const perpangkatan = function(n) {
  if (n == undefined) {
    return 5 * 5;
  }

  return n * n;
};

console.log(perpangkatan(5));

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
