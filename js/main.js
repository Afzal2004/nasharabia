document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  /* ---------- Sticky Nav & Back to Top ---------- */
  var navbar = document.getElementById('navbar');
  var toTopBtn = document.querySelector('.to-top');

  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    if (navbar) {
      navbar.classList.toggle('is-stuck', scrollY > 30);
    }
    if (toTopBtn) {
      toTopBtn.classList.toggle('is-shown', scrollY > 500);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial run

  /* ---------- Mobile Navigation Toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking links (except dropdown trigger)
    navLinks.querySelectorAll('a:not(.nav-dropdown-wrap > a)').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Mobile Dropdown Tap Toggle ---------- */
  var ddWraps = document.querySelectorAll('.nav-dropdown-wrap');
  ddWraps.forEach(function (wrap) {
    var trigger = wrap.querySelector('a');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 1080) {
          e.preventDefault();
          wrap.classList.toggle('open');
          
          // Close other open dropdowns
          ddWraps.forEach(function (other) {
            if (other !== wrap) other.classList.remove('open');
          });
        }
      });
    }
  });

  /* ---------- Hero Slider ---------- */
  var slides = document.querySelectorAll('.hero-slide');
  var dotsWrap = document.querySelector('.hero-dots');
  var current = 0;
  var slideInterval;

  if (slides.length) {
    // Generate navigation dots dynamically
    slides.forEach(function (s, i) {
      var dot = document.createElement('button');
      if (i === 0) dot.classList.add('is-active');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () {
        goToSlide(i);
        restartSlideTimer();
      });
      if (dotsWrap) dotsWrap.appendChild(dot);
    });

    function goToSlide(i) {
      slides[current].classList.remove('is-active');
      if (dotsWrap && dotsWrap.children[current]) {
        dotsWrap.children[current].classList.remove('is-active');
      }
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      if (dotsWrap && dotsWrap.children[current]) {
        dotsWrap.children[current].classList.add('is-active');
      }
    }

    function nextSlide() {
      goToSlide(current + 1);
    }

    function prevSlide() {
      goToSlide(current - 1);
    }

    function restartSlideTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000);
    }

    // Connect arrows
    var nextArrow = document.querySelector('.hero-arrows .next');
    var prevArrow = document.querySelector('.hero-arrows .prev');
    if (nextArrow) {
      nextArrow.addEventListener('click', function () {
        nextSlide();
        restartSlideTimer();
      });
    }
    if (prevArrow) {
      prevArrow.addEventListener('click', function () {
        prevSlide();
        restartSlideTimer();
      });
    }

    restartSlideTimer();
  }

  /* ---------- Scroll Reveal (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Animated Counters ---------- */
  var counters = document.querySelectorAll('.counter b[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var start = 0;
        var duration = 1800;
        var startTime = null;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out
          el.textContent = Math.floor(easeProgress * target) + suffix;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = target + suffix;
          }
        }

        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    // Fallback: load instantly
    counters.forEach(function (el) {
      var target = el.getAttribute('data-count');
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
  }

  /* ---------- Project Categories Filter ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Toggle active button state
        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        var filter = btn.getAttribute('data-filter');
        projectCards.forEach(function (card) {
          var category = card.getAttribute('data-cat');
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
            // Retrigger opacity animation
            card.style.opacity = '0';
            setTimeout(function () { card.style.opacity = '1'; }, 50);
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* ---------- Form Submission Handler ---------- */
  var forms = document.querySelectorAll('.contact-form, #quoteForm');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successMsg = form.querySelector('.form-success') || document.querySelector('.form-success');
      if (successMsg) {
        successMsg.classList.add('is-shown');
      } else {
        alert("Thank you! Your message has been sent successfully.");
      }
      form.reset();
    });
  });

  /* ---------- Back to Top Button ---------- */
  if (toTopBtn) {
    toTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});