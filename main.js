const imgDarkmode = document.querySelector(".icons-darkmode");
const btnDarkmode = document.querySelector(".nft-darkmode");
const html = document.querySelector("html");

btnDarkmode.addEventListener("click", () => {
  imgDarkmode.classList.toggle("change");

  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
  } else {
    html.dataset.colorMode = "light";
  }
});
