// MOBILE MENU

const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// CLOSE MENU AFTER CLICK

const navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// ACTIVE NAV LINK

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// AOS ANIMATION

AOS.init({
  duration: 1000,
  once: true,
});
