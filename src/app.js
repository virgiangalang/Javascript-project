let multiLineString = "Ini adalah paragraf 1 dan \n Dan ini adalah paragraf 2";
let multiLineString2 = `Ini adalah paragraf 1 
Dan ini adalah paragraf 2`;

let firstName = "David";
let lastName = "Becham";
let shirtNumber = 7;

let namaLengkap = `${firstName} ${lastName} ${shirtNumber}`;
console.log(namaLengkap);

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
