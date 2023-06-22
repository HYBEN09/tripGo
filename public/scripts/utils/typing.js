import { getNode } from "../dom/index.js";

export function startTyping() {
  const typingContainer = getNode(".typing-text");

  const typingText = "다양한 서비스, 여행에 퐁당";

  const typingDelay = 100;
  const typingInterval = 2000;
  const typingPause = 2000;

  let charIndex = 0;
  let typingTimeout = null;
  let pauseTimeout = null;

  function type() {
    typingContainer.textContent += typingText.charAt(charIndex);
    charIndex++;

    if (charIndex < typingText.length) {
      typingTimeout = setTimeout(type, typingDelay);
    } else {
      pauseTimeout = setTimeout(reset, typingPause);
    }
  }

  function reset() {
    charIndex = 0;
    typingContainer.textContent = "";
    typingTimeout = setTimeout(type, typingDelay);
  }

  // 페이지 로드 시 타이핑 효과 시작
  typingTimeout = setTimeout(type, typingInterval);
}
