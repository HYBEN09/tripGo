import {
  getNode,
  fetchData,
  startTyping,
  renderDestination,
  renderPackageItems,
  setupVideoControls,
} from "./public/scripts/index.js";

const header = getNode("header");
const navbar = getNode(".navbar");
const menuIcon = getNode("#menu-icon");
const searchInput = getNode("#search-input");
const navLinks = navbar.querySelectorAll("a");
const searchButton = getNode(".search-button");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchInput.focus();
});

// 홈 비디오 동작 제어
setupVideoControls();

// 타이핑 효과
startTyping();

// Smooth scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("header .navbar a");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// sticky header
function handleScroll() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", handleScroll);

// dynamically Destination data
fetchData("./scripts/data/destination.json").then((data) => {
  renderDestination(data);
});

// dynamically PackageItems data
fetchData("./scripts/data/packageItem.json").then((data) => {
  renderPackageItems(data);
});

// menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  });
});

