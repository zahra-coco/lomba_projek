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

const reveal = document.querySelector(".box-sampah");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;
  const boxTop = reveal.getBoundingClientRect().top;

  if (boxTop < trigger) {
    reveal.classList.add("show");
  }
}

window.addEventListener("scroll", showOnScroll);

const fakta = document.getElementById("faktaCards");

function showFakta() {
  const rect = fakta.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    fakta.classList.add("show");
  }
}

window.addEventListener("scroll", showFakta);
window.addEventListener("load", showFakta);

const dampak = document.getElementById("dampakCards");

function showDampak() {
  const rect = dampak.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    dampak.classList.add("show");
  }
}

window.addEventListener("scroll", showDampak);
window.addEventListener("load", showDampak);

const kegiatan = document.getElementById("kegiatanSteps");

function showKegiatan() {
  const rect = kegiatan.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    kegiatan.classList.add("show");
  }
}

window.addEventListener("scroll", showKegiatan);
window.addEventListener("load", showKegiatan);
