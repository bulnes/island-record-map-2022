const videoToggles = () => {
  const toggles = [...document.querySelectorAll('[data-js-video-toggle]')];
  toggles.forEach((toggle) => toggle.addEventListener('click', (e) => {
    e.preventDefault();

    const visibleClass = 'video-container--visible';
    const $videoContainer = document.querySelector('.video-container');

    $videoContainer.classList.toggle(visibleClass);

    const $iframe = document.querySelector('.video-container__video');
    $iframe.removeAttribute('src');
  }));
};

const videoTypes = () => {
  const types = [...document.querySelectorAll('[data-js-video-type]')];
  types.forEach((type) => type.addEventListener('click', (e) => {
    e.preventDefault();

    const videoId = e.currentTarget.getAttribute('data-js-video-type');
    const videoSrc = `https://player.r7.com/video/i/${videoId}?autoPlay=true&full=true`;

    const $iframe = document.querySelector('.video-container__video');
    $iframe.src = videoSrc;
  }));
};

window.addEventListener('load', () => {
  videoToggles();
  videoTypes();
});