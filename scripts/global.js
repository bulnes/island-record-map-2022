const videoToggles = () => {
  const toggles = [...document.querySelectorAll('[data-js-video-toggle]')];
  toggles.forEach((toggle) => toggle.addEventListener('click', (e) => {
    e.preventDefault();

    const isTend = e.target.hasAttribute('data-js-video-tend');
    const isRiver = e.target.hasAttribute('data-js-video-river');

    const url = isTend 
      ? 'https://recordtv.r7.com/ilha-record-2/novidades/fotos/faca-um-tour-pelo-cenario-paradisiaco-de-ilha-record-2-04072022'
      : isRiver
      ? 'https://www.r7.com/mapailharecord'
      : 'https://www.r7.com';

    window.open(url, '_blank');
  }));
};

window.addEventListener('load', videoToggles);
