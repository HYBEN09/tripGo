import {
  setupVideoControls,
  getNode,
  destinations,
} from "./public/scripts/index.js";

const header = getNode("header");
const destinationContent = getNode(".destination-content");

// 홈 비디오 동작 제어
setupVideoControls();

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
