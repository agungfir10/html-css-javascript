const panels = document.querySelectorAll(".panel");
const headingJumbotron = document.querySelector("#jumbotron h2");

panels.forEach((panel, i, arr) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panels[i].classList.add("active");
    headingJumbotron.style.visibility = "hidden";
  });
  panel.addEventListener("mouseout", () => {
    removeActiveClasses();
    headingJumbotron.style.visibility = "visible";
  });
});

function removeActiveClasses() {
  panels.forEach((panel, i, arr) => {
    panel.classList.remove("active");
  });
}
