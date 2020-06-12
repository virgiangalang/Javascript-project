let yearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));

if (2020 - yearOfBirth < 17 && 2020 - yearOfBirth > 10) {
  alert("Kamu masih anak anak");
} else {
  alert("Kamu sudah cukup Umur");
}

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
