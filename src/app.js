let yearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));

if (2020 - yearOfBirth < 10) {
  alert("Kamu masih anak anak");
} else if (2020 - yearOfBirth > 10 && 2020 - yearOfBirth < 17) {
  alert("Kamu masih Remaja");
} else if (2020 - yearOfBirth > 18 && 2020 - yearOfBirth < 60) {
  alert("Kamu Sudah Dewasa");
} else if (2020 - yearOfBirth > 60 && 2020 - yearOfBirth < 80) {
  alert("Kamu Sudah Dewasa");
} else {
  alert("GOBLOK KAMU COK!");
}

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
