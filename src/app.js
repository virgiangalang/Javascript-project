let yearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));

if (2020 - yearOfBirth < 17) {
  alert("Kamu masih bocil, umurmu masih dibawah 17 Tahun");
} else {
  alert("Kamu sudah cukup Umur");
}

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
