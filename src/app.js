const changeProjectHeadingTitle = title => {
  const projectTitle = document.querySelector("#project-title");
  projectTitle.textContent = title;
};

changeProjectHeadingTitle("Title Baru dari JS File");
