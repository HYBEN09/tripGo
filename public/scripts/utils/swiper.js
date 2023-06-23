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

const advertisementContainer = document.querySelector(
  ".advertisement .swiper-wrapper"
);

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
