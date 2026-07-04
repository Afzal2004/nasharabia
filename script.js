
  // Sticky header shadow
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  document.getElementById('burgerBtn').addEventListener('click', function(){
    document.querySelector('nav.links').classList.toggle('mobile-open');
    this.classList.toggle('open');
  });

  // Hero slider
  (function(){
    var slides = document.querySelectorAll('.hero-slide');
    var dotsWrap = document.getElementById('heroDots');
    var current = 0;
    slides.forEach(function(_, i){
      var d = document.createElement('span');
      if(i===0) d.classList.add('active');
      d.addEventListener('click', function(){ goTo(i); });
      dotsWrap.appendChild(d);
    });
    var dots = dotsWrap.querySelectorAll('span');
    function goTo(i){
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    document.getElementById('heroNext').addEventListener('click', function(){ goTo(current+1); });
    document.getElementById('heroPrev').addEventListener('click', function(){ goTo(current-1); });
    setInterval(function(){ goTo(current+1); }, 6000);
  })();

  // 3D service cube tap support (touch devices)
  document.querySelectorAll('.cube-slot').forEach(function(box){
    box.addEventListener('click', function(){
      var wasOpen = box.classList.contains('touched');
      document.querySelectorAll('.cube-slot').forEach(function(b){ b.classList.remove('touched'); });
      if(!wasOpen) box.classList.add('touched');
    });
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.15});
  revealEls.forEach(function(el){ io.observe(el); });

  // Animated counters
// Animated counters
  var counters = document.querySelectorAll('[data-count]');
  var counted = false;
  function runCounters(){
    if(counted) return;
    counted = true;
    counters.forEach(function(el){
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1400;
      var startTime = null;
      function step(ts){
        if(!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var counterIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) runCounters(); });
  }, {threshold:.4});
  document.querySelectorAll('.hero-stats, .counters, .stats-section').forEach(function(el){ counterIO.observe(el); });

  // Project filter
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      projectCards.forEach(function(card){
        card.classList.toggle('hide', f !== 'all' && card.getAttribute('data-cat') !== f);
      });
    });
  });

