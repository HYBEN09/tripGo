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
fetchData("./public/scripts/data/destination.json").then((data) => {
  renderDestination(data);
});

// dynamically PackageItems data
fetchData("./public/scripts/data/packageItem.json").then((data) => {
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

// swiper
const data = [
  {
    id: 1,
    link: "https://www.tripbtoz.com/md/hb2023",
    src: "./assets/img/banner/banner1.svg",
    alt: "전국 호텔 안심특가 광고",
  },
  {
    id: 2,
    link: "https://www.tripbtoz.com/event/stayfesta2023",
    src: "./assets/img/banner/banner2.svg",
    alt: "숙박 세일 페스타 광고",
  },
  {
    id: 3,
    link: "https://www.tripbtoz.com/md/star123",
    src: "./assets/img/banner/banner3.svg",
    alt: "인기 급상승 갓성비 호텔 광고",
  },
  {
    id: 4,
    link: "https://www.tripbtoz.com/md/hotelpackage23",
    src: "./assets/img/banner/banner4.svg",
    alt: "요즘 호캉스 패키지 모음 광고",
  },
];

const advertisementContainer = getNode(".advertisement .swiper-wrapper");

data.forEach((item) => {
  const slideHTML = /*html*/ `
    <ul class="swiper-slide">
      <li>
      <a href="${item.link}" target="_blank">
      <img src="${item.src}" alt="${item.alt}">
      </a>
      </li>
    </ul>
  `;
  advertisementContainer.insertAdjacentHTML("beforeend", slideHTML);
});
