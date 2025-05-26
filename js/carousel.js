
/* Tiny carousel: swap .active class every N ms */
(function() {
  const delay = 3000;                      // 4 s per slide
  const slides = document.querySelectorAll('#heroCarousel img');
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, delay);
})();
