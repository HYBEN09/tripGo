import anime from "animejs";

const packageSection = document.getElementById("package");
const stars = document.querySelectorAll(".stars i");

// 애니메이션 효과 설정
const animateStars = () => {
  stars.forEach((star, index) => {
    anime({
      targets: star,
      translateY: ["50px", "0px"],
      opacity: [0, 1],
      duration: 1000,
      delay: index * 200,
      easing: "easeOutExpo",
      autoplay: true,
    });
  });
};

// 패키지 섹션 스크롤 이벤트 핸들러
const handleStarScroll = () => {
  const packageSectionTop = packageSection.offsetTop;
  const packageSectionHeight = packageSection.offsetHeight;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (
    scrollPosition > packageSectionTop - windowHeight * 0.8 &&
    scrollPosition < packageSectionTop + packageSectionHeight * 0.2
  ) {
    // 패키지 섹션이 20% 이상 보일 때 애니메이션 실행
    animateStars();

    window.removeEventListener("scroll", handleStarScroll);
  }
};

window.addEventListener("scroll", handleStarScroll);
