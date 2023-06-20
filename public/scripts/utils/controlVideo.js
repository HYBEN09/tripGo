import { getNode } from '../dom/index.js';

const toggleVideo = video => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

export const setupVideoControls = () => {
  const video = getNode('#video');

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      video.pause();
    } else if (event.key === 'Enter' || event.key === ' ') {
      toggleVideo(video);
    }
  });
};
