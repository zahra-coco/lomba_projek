const links = document.querySelectorAll(".nav-item a");
      const indicator = document.getElementById("indicator");

      function moveIndicator(el) {
        indicator.style.width = el.offsetWidth + "px";
        indicator.style.left = el.offsetLeft + "px";
        indicator.style.opacity = "1";
      }

      const currentPage = location.pathname.split("/").pop();
      let found = false;

      links.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          moveIndicator(link);
          found = true;
        }

        link.addEventListener("click", () => moveIndicator(link));
      });

      window.addEventListener("load", () => {
        if (!found) {
          indicator.style.opacity = "0";
          indicator.style.width = "0";
        }
      });

      const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobileMenu");
      const overlay = document.getElementById("overlay");

      function toggleMenu() {
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        hamburger.classList.toggle("active");
      }

      hamburger.addEventListener("click", toggleMenu);
      overlay.addEventListener("click", toggleMenu);

function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    moveIndicator(link);
  });
});

// posisi awal
window.onload = () => {
  moveIndicator(document.querySelector(".nav-link.active"));
};

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.15 },
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
});

// tombol scroll
document.getElementById("btnMulaiAksi").addEventListener("click", function () {
  document.getElementById("aksi-kecil").scrollIntoView({
    behavior: "smooth",
  });
});

reveals.forEach((el) => observer.observe(el));

function toggleDone(btn) {
  // kalau sudah done, STOP (biar tidak balik)
  if (btn.classList.contains("done")) {
    return;
  }

  // tandai sebagai sudah dilakukan
  btn.classList.add("done");
  btn.innerHTML = "✓ Sudah Dilakukan";

  // opsional: biar benar-benar tidak bisa diklik lagi
  btn.disabled = true;
}

