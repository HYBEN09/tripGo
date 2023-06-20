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
