const changeProjectHeadingTitle = title => {
  const projectTitle = document.querySelector("#project-title");

  if (typeof title === "string") {
    projectTitle.textContent = title;
  } else {
    console.error("your argument is not string!");
  }
};

changeProjectHeadingTitle(2020);
