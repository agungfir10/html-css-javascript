const panels = document.querySelectorAll(".panel");
const headingJumbotron = document.querySelector("#jumbotron h2");
const layers = document.querySelectorAll(".layer-jumbotron");

layers.forEach((layer, i, arr) => {
  layer.addEventListener("mouseover", () => {
    removeActiveClasses();
    panels[i].classList.add("active");
    headingJumbotron.style.visibility = "hidden";
  });
  layer.addEventListener("mouseout", () => {
    removeActiveClasses();
    headingJumbotron.style.visibility = "visible";
  });
});

function removeActiveClasses() {
  layers.forEach((layer, i, arr) => {
    panels[i].classList.remove("active");
  });
}
