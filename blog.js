const navItems = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(el) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement.getBoundingClientRect();

  indicator.style.width = rect.width + "px";
  indicator.style.left = rect.left - parentRect.left + "px";
}

window.addEventListener("load", () => {
  const active = document.querySelector(".nav-item.active");
  if (active) moveIndicator(active);
});

window.addEventListener("resize", () => {
  const active = document.querySelector(".nav-item.active");
  if (active) moveIndicator(active);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    moveIndicator(item);
  });
});
