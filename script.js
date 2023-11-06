const sidebar = document.querySelector(".aside");
const img = document.querySelectorAll("img");
const imgShow = document.querySelector(".imgShow");
const cross = document.querySelector(".cross");
const list = document.querySelector(".o-clist");
const page = document.querySelectorAll(".page");
const pageMode = document.querySelector(".page-mode");
let mode = "dark";
let modelo = JSON.parse(localStorage.getItem("modelo"));

pageMode.addEventListener("click", function () {
  if (mode === "dark") {
    localStorage.setItem("modelo", JSON.stringify("dark"));

    document.body.classList.add("darkmode");
    mode = "light";
  } else {
    localStorage.setItem("modelo", JSON.stringify("light"));

    document.body.classList.remove("darkmode");
    mode = "dark";
  }
});

if (modelo === "light") document.body.classList.remove("darkmode");
if (modelo === "dark") document.body.classList.add("darkmode");

page.forEach((e) => {
  e.addEventListener("click", function () {
    sidebar.classList.remove("activeList");
  });
});

list.addEventListener("click", () => {
  sidebar.classList.toggle("activeList");
});

img.forEach((e) => {
  e.addEventListener("mouseenter", (e) => {
    const targetEl = e.target;
    img.forEach((e) => {
      if (targetEl !== e) e.style.filter = "blur(2.5px) grayscale(100%)";
    });
  });
});

img.forEach((e) => {
  e.addEventListener("mouseleave", (e) => {
    const targetEl = e.target;
    img.forEach((e) => {
      if (targetEl !== e) e.style.filter = "blur(0px) grayscale(100%)";
    });
  });
});

img.forEach((e) => {
  e.addEventListener("click", function (e) {
    const ImgSrc = e.target.src;

    imgShow.style.opacity = "1";
    imgShow.style.visibility = "visible";
    imgShow.style.background = `url(${ImgSrc})`;
    imgShow.style.backgroundSize = "30rem";
    imgShow.style.backgroundPosition = "center";
    imgShow.style.backgroundRepeat = "no-repeat";
    imgShow.style.backgroundColor = "rgba(0, 0, 0, 0.805)";
  });
});

cross.addEventListener("click", () => {
  imgShow.style.opacity = "0";
  imgShow.style.visibility = "hidden";
});
