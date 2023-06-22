const destinationContent = document.querySelector(".destination-content");

export function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("An error occurred while fetching the JSON data:", error);
    });
}

export function renderDestination(destinations) {
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
}

export function renderPackageItems(data) {
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
}