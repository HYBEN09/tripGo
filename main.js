import { setupVideoControls, getNode } from "./public/scripts/index.js";

const header = getNode("header");
// 홈 비디오 동작 제어
setupVideoControls();

// sticky header

function handleScroll() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", handleScroll);
