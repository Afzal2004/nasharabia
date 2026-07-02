// ============================================================
// NASH ARABIA — shared site interactions
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ---------- header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 6px 20px rgba(18,32,43,.10)' : 'none';
    });
  }

  /* ---------- 3D cube hero: cursor-driven rotation ---------- */
  var stage = document.querySelector('.cube-stage');
  var cube = document.querySelector('.cube');
  if (stage && cube) {
    var active = false;
    stage.addEventListener('mouseenter', function () {
      active = true;
      cube.classList.add('is-active');
    });
    stage.addEventListener('mousemove', function (e) {
      if (!active) return;
      var rect = stage.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 .. 0.5
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      var rotY = 35 + px * 90;
      var rotX = -24 - py * 70;
      cube.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
    });
    stage.addEventListener('mouseleave', function () {
      active = false;
      cube.classList.remove('is-active');
      cube.style.transform = '';
    });
    // touch support
    stage.addEventListener('touchmove', function (e) {
      var t = e.touches[0];
      var rect = stage.getBoundingClientRect();
      var px = (t.clientX - rect.left) / rect.width - 0.5;
      var py = (t.clientY - rect.top) / rect.height - 0.5;
      cube.classList.add('is-active');
      cube.style.transform = 'rotateX(' + (-24 - py * 70) + 'deg) rotateY(' + (35 + px * 90) + 'deg)';
    }, { passive: true });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- testimonial slider ---------- */
  var slides = document.querySelectorAll('.testi-slide');
  var dotsWrap = document.querySelector('.testi-nav');
  if (slides.length && dotsWrap) {
    var idx = 0;
    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      if (i === 0) b.className = 'active';
      b.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      b.addEventListener('click', function () { show(i); });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll('button');
    function show(i) {
      slides[idx].classList.remove('active');
      dots[idx].classList.remove('active');
      idx = i;
      slides[idx].classList.add('active');
      dots[idx].classList.add('active');
    }
    setInterval(function () { show((idx + 1) % slides.length); }, 6000);
  }

  /* ---------- project filter ---------- */
  var filterTags = document.querySelectorAll('.filter-tag');
  var projectCards = document.querySelectorAll('[data-cat]');
  if (filterTags.length && projectCards.length) {
    filterTags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        filterTags.forEach(function (t) { t.classList.remove('active'); });
        tag.classList.add('active');
        var cat = tag.getAttribute('data-filter');
        projectCards.forEach(function (card) {
          card.style.display = (cat === 'all' || card.getAttribute('data-cat') === cat) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- contact form (demo submit) ---------- */
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.textContent = 'Thank you — your request has been received. Our team will contact you within 24 hours.';
      }
      form.reset();
    });
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
});

/* ==========================
   HERO BACKGROUND SLIDER
========================== */

const heroSlides = document.querySelectorAll(".hero-slide");

if(heroSlides.length){

    let heroIndex = 0;

    function showHero(index){

        heroSlides.forEach(slide =>
            slide.classList.remove("active")
        );

        heroSlides[index].classList.add("active");

    }

    function nextHero(){

        heroIndex++;

        if(heroIndex >= heroSlides.length){

            heroIndex = 0;

        }

        showHero(heroIndex);

    }

    function prevHero(){

        heroIndex--;

        if(heroIndex < 0){

            heroIndex = heroSlides.length - 1;

        }

        showHero(heroIndex);

    }

    document.querySelector(".hero-next")
        ?.addEventListener("click", nextHero);

    document.querySelector(".hero-prev")
        ?.addEventListener("click", prevHero);

    setInterval(nextHero,5000);

}
