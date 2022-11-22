// Loading Page
window.onload = () => {
  document.querySelector(".loading").classList.add("hidden");
};

// Hidden Themes Box
let gear = document.querySelector(".fa-gear");
let themes = document.querySelector(".themes");
document.querySelector(".home").onclick = () => {
  themes.classList.add("hidden");
};
gear.onclick = () => {
  themes.classList.toggle("hidden");
};

// Change Theme
document.querySelectorAll(".colors div").forEach((color) => {
  color.onclick = () => {
    document.documentElement.style.setProperty(
      "--hue-color",
      color.dataset.hueColor
    );
  };
});

// Change Mode
let modeIcon = document.querySelector(".mode i");
modeIcon.onclick = () => {
  if (modeIcon.classList.contains("fa-moon")) {
    modeIcon.className = "fa-solid fa-sun";
    document.body.className = "sun-mode";
  } else {
    modeIcon.className = "fa-solid fa-moon";

    document.body.className = " ";
  }
};
