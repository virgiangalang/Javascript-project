let masalah = prompt("What's Your Problem?");
switch (masalah) {
  case "nothing":
    alert("Good, remember you are in strong hands");
    break;
  default:
    alert(
      "Remember, God is bigger than your problem,just do your best then he will do His part"
    );
    break;
}

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
