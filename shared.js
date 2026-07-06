/* Shared nav, dropdown, mobile menu, 3D boxes, reveal — all pages */
(function () {
  "use strict";

  /* Header scroll */
  var header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  /* Mobile menu */
  var hamburger = document.getElementById("hamburger");
  var mainNav = document.getElementById("mainNav");
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      mainNav.classList.toggle("open");
      document.body.classList.toggle("menu-open");
    });
  }

  /* Services dropdown — desktop hover + mobile toggle */
  document.querySelectorAll(".nav-dropdown-wrap").forEach(function (wrap) {
    var trigger = wrap.querySelector(".nav-drop-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (e) {
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        wrap.classList.toggle("open");
        document.querySelectorAll(".nav-dropdown-wrap").forEach(function (w) {
          if (w !== wrap) w.classList.remove("open");
        });
      }
    });
  });

  if (mainNav) {
    mainNav.querySelectorAll("a:not(.nav-drop-trigger)").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("open");
        hamburger && hamburger.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* 3D tilt boxes — rotate upward on hover */
  document.querySelectorAll(".tilt-card").forEach(function (card) {
    var inner = card.querySelector(".fbox-inner") || card;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");

    card.addEventListener("mouseenter", function () {
      inner.style.transition = "transform 0.15s ease, box-shadow 0.3s ease";
    });

    card.addEventListener("mousemove", function (e) {
      if (window.innerWidth <= 768) return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      var rx = y * -18 - 8;
      var ry = x * 18;
      inner.style.transform =
        "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-14px) scale(1.03)";
      inner.style.boxShadow = "0 30px 60px -12px rgba(0,0,0,.45)";
    });

    card.addEventListener("mouseleave", function () {
      inner.style.transition = "transform 0.55s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease";
      inner.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)";
      inner.style.boxShadow = "";
    });
  });

  /* Scroll reveal */
  var revealObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObs.observe(el);
  });

  /* Stagger children */
  document.querySelectorAll("[data-stagger]").forEach(function (parent) {
    parent.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = i * 0.1 + "s";
    });
  });

  /* Page banner parallax subtle */
  var banner = document.querySelector(".page-banner");
  if (banner) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY * 0.35;
      banner.style.backgroundPosition = "center " + y + "px";
    });
  }

  /* Contact form on sub-pages */
  var pageForm = document.getElementById("pageQuoteForm");
  if (pageForm) {
    pageForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks — we'll be in touch shortly.");
      pageForm.reset();
    });
  }
})();
