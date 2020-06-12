let count = 0;
while (count < 20) {
  console.log(count);
  count = count + 2;
}

do {
  console.log(count);
  count = count + 2;
} while (count < 2);

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
