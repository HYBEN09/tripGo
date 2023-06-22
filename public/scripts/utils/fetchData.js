export function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("An error occurred while fetching the JSON data:", error);
    });
}

const destinationContent = document.querySelector(".destination-content");

export function renderDestination(destinations) {
  const destinationHTML = destinations.map((destination) => {
    const { imageSrc, altText, title, country } = destination;

    return /*html*/ `
      <div class="col-content">
        <img src="${imageSrc}" alt="${altText}" />
        <h5>${title}</h5>
        <p>${country}</p>
      </div>
    `;
  });

  destinationContent.innerHTML = destinationHTML.join("");
}

const rowItemsContainer = document.querySelector(".row-items");
export function renderPackageItems(data) {
  const rowItemsHtml = data.map((item) => {
    const { imgSrc, altText, title, description } = item;

    return /*html*/ `
        <div class="container-box">
          <div class="container-img">
             <img src="${imgSrc}" alt="${altText}" />
          </div>
             <h4>${title}</h4>
             <p>${description}</p>
          </div>
        `;
  });

  rowItemsContainer.innerHTML = rowItemsHtml.join("");
}
