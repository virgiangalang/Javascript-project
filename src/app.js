//array
const array = [1, 2, 3, 4, 5, 6, 7];

const changeProjectHeadingTitle = title => {
  const projectTitle = document.querySelector("#project-title");

  if (typeof title === "string") {
    projectTitle.textContent = title;
  } else {
    console.error("your argument is not string!");
  }
};

changeProjectHeadingTitle("Javascript is EZ");
