let biodataObject = {
  firstName: "Bambang",
  lastName: "Sutarman",
  makananFavorit: ["Sate babi, Rica babi, Babi kecap"],
  istri: {
    firstName: "Siti Nurjeha",
    lastName: "Semloha",
    makananFavorit: ["Sate babi, Rica babi, Babi kecap"],
    anak: {
      firstName: "Budi Subsidi",
      lastName: "Abadi"
    }
  }
};

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
