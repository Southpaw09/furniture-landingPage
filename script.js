const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const nav = document.getElementById("nav");

open.addEventListener("click", () => {
  nav.classList.add("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
});
