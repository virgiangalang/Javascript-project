let yearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));

if (2020 - yearOfBirth < 10) {
  alert("Kamu masih anak anak");
} else {
  alert("GOBLOK KAMU COK!");
}

2020 - yearOfBirth < 17 ? alert("Kamu masih kecil") : alert("kamu sudah tua");

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
