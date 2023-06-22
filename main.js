import {
  setupVideoControls,
  getNode,
  destinations,
  startTyping,
} from "./public/scripts/index.js";

const header = getNode("header");
const navbar = getNode(".navbar");
const menuIcon = getNode("#menu-icon");
const navLinks = navbar.querySelectorAll("a");
const destinationContent = getNode(".destination-content");

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

destinations.forEach((destination) => {
  const { imageSrc, altText, title, country } = destination;

  const colContent = `
    <div class="col-content">
      <img src="${imageSrc}" alt="${altText}" />
      <h5>${title}</h5>
      <p>${country}</p>
    </div>
  `;

  destinationContent.insertAdjacentHTML("beforeend", colContent);
});

fetch("./public/scripts/data/packageItem.json")
  .then((response) => response.json())
  .then((data) => {
    const rowItemsHtml = data
      .map(
        (item) => `
      <div class="container-box">
        <div class="container-img">
          <img src="${item.imgSrc}" alt="${item.altText}" />
        </div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `
      )
      .join("");

    const rowItemsContainer = document.querySelector(".row-items");
    rowItemsContainer.innerHTML = rowItemsHtml;
  })
  .catch((error) => {
    console.error("An error occurred while fetching the JSON data:", error);
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
