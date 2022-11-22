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
let logo = document.querySelector(".logo img");
modeIcon.onclick = () => {
  if (modeIcon.classList.contains("fa-moon")) {
    logo.src = "imgs/logo-light.png";
    document.body.className = "sun-mode";
    modeIcon.className = "fa-solid fa-sun";
  } else {
    document.body.className = " ";
    logo.src = "imgs/logo-dark.png";
    modeIcon.className = "fa-solid fa-moon";
  }
};
console.log();
