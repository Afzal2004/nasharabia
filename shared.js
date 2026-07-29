/* Shared visual effects only */
(function () {
  "use strict";

  /* ==========================================
     3D Tilt Cards
  ========================================== */
  document.querySelectorAll(".tilt-card").forEach(function (card) {
    var inner = card.querySelector(".fbox-inner") || card;

    card.addEventListener("mouseenter", function () {
      inner.style.transition =
        "transform 0.15s ease, box-shadow 0.3s ease";
    });

    card.addEventListener("mousemove", function (e) {
      if (window.innerWidth <= 768) return;

      var rect = card.getBoundingClientRect();

      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      var rotateX = y * -18 - 8;
      var rotateY = x * 18;

      inner.style.transform =
        "perspective(900px) rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg) translateY(-14px) scale(1.03)";

      inner.style.boxShadow =
        "0 30px 60px -12px rgba(0,0,0,.45)";
    });

    card.addEventListener("mouseleave", function () {
      inner.style.transition =
        "transform 0.55s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease";

      inner.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

      inner.style.boxShadow = "";
    });
  });

  /* ==========================================
     Stagger Reveal Delay
  ========================================== */
  document.querySelectorAll("[data-stagger]").forEach(function (parent) {
    parent.querySelectorAll(".reveal").forEach(function (el, index) {
      el.style.transitionDelay = index * 0.1 + "s";
    });
  });

  /* ==========================================
     Optional Banner Parallax
     Remove this block if not needed
  ========================================== */
  var banner = document.querySelector(".page-banner");

  if (banner) {
    window.addEventListener(
      "scroll",
      function () {
        var offset = window.scrollY * 0.35;
        banner.style.backgroundPosition =
          "center " + offset + "px";
      },
      { passive: true }
    );
  }
})();
