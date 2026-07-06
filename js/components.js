/* Shared header & footer markup, injected on every page.
   Active page is styled based on the data-page attribute on <body>. */

(function(){
  const page = document.body.getAttribute('data-page') || 'home';

  // Navigation Links including Dropdown for Services
  const navLinksHTML = `
    <a href="index.html" class="${page==='home'?'active':''}">Home</a>
    <a href="about.html" class="${page==='about'?'active':''}">About Us</a>
    <div class="nav-dropdown-wrap">
      <a href="services.html" class="${page==='services'?'active':''}">Services <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></a>
      <div class="dropdown">
        <a href="manpower.html">Rental Manpower</a>
        <a href="overseas_recruitment.html">Overseas Recruitment</a>
        <a href="rental_equipment.html">Rental Equipment</a>
        <a href="trading.html">Trading</a>
        <a href="facility_management.html">Facility Management</a>
        <a href="porta_cabin_rental.html">Porta Cabin Rental</a>
      </div>
    </div>
    <a href="projects.html" class="${page==='projects'?'active':''}">Projects</a>
    <a href="clients.html" class="${page==='clients'?'active':''}">Clients</a>
    <a href="certifications.html" class="${page==='certifications'?'active':''}">Certifications</a>
    <a href="careers.html" class="${page==='careers'?'active':''}">Careers</a>
    <a href="contact.html" class="${page==='contact'?'active':''}">Contact Us</a>
  `;

  // Header HTML (matching photo 2 layout)
  const headerHTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <span class="hide-sm"><svg viewBox="0 0 24 24"><path d="M12 2C7 2 3 6 3 11c0 6.5 9 11 9 11s9-4.5 9-11c0-5-4-9-9-9zm0 12a3 3 0 110-6 3 3 0 010 6z"/></svg>Riyadh, Saudi Arabia</span>
        <a href="mailto:info@nasharabia.com">
          <svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 12V9l-8 6-8-6v9h16z"/></svg>
          info@nasharabia.com
        </a>
        <a href="tel:+966500000000">
          <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
          +966 50 000 0000
        </a>
      </div>
      <div class="topbar-social">
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9v-12z"/></svg></a>
        <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18 3h3l-7.5 8.6L22 21h-6.6l-5.2-6.5L4.3 21H1.3l8-9.2L2 3h6.8l4.7 6 4.5-6zM16.8 19h1.7L7.3 5H5.5L16.8 19z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.4.45.7.27 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.25.6.4 1.3.45 2.4.06 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.45 2.4-.27.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.6.25-1.3.4-2.4.45-1 .06-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.4-.45-.7-.27-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.25-.6-.4-1.3-.45-2.4C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.45-2.4.27-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.25 1.3-.4 2.4-.45C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg></a>
      </div>
    </div>
  </div>
  <nav class="navbar" id="navbar">
    <div class="container">
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      <div class="nav-links" id="navLinks">${navLinksHTML}</div>
      <a href="index.html" class="brand">
        <div class="brand-text">
          <div class="b1">Nash Arabia</div>
          <div class="b2">General Contracting Co.</div>
        </div>
        <img src="logo.png" alt="Nash Arabia General Contracting Co. logo" class="brand-mark">
      </a>
    </div>
  </nav>`;

  // Footer HTML
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand" style="border:none;box-shadow:none;padding:0;background:transparent;justify-content:flex-start;">
            <img src="logo.png" alt="Nash Arabia General Contracting Co. logo" class="brand-mark" style="filter: brightness(0) invert(1);">
            <div class="brand-text" style="text-align:left;">
              <div class="b1" style="color:#fff;">Nash Arabia</div>
              <div class="b2" style="color:var(--orange);">General Contracting Co.</div>
            </div>
          </a>
          <p>A Saudi-based general contracting company delivering manpower supply, equipment rental, facility management and industrial trading across the Kingdom's construction, infrastructure and energy sectors.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9v-12z"/></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18 3h3l-7.5 8.6L22 21h-6.6l-5.2-6.5L4.3 21H1.3l8-9.2L2 3h6.8l4.7 6 4.5-6zM16.8 19h1.7L7.3 5H5.5L16.8 19z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.4.45.7.27 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.25.6.4 1.3.45 2.4.06 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.45 2.4-.27.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.6.25-1.3.4-2.4.45-1 .06-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.4-.45-.7-.27-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.25-.6-.4-1.3-.45-2.4C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.45-2.4.27-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.25 1.3-.4 2.4-.45C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="clients.html">Clients</a></li>
            <li><a href="certifications.html">Certifications</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="manpower.html">Rental Manpower</a></li>
            <li><a href="overseas_recruitment.html">Overseas Recruitment</a></li>
            <li><a href="rental_equipment.html">Rental Equipment</a></li>
            <li><a href="facility_management.html">Facility Management</a></li>
            <li><a href="trading.html">Trading</a></li>
            <li><a href="porta_cabin_rental.html">Porta Cabin Rental</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Details</h4>
          <ul class="footer-contact">
            <li><svg viewBox="0 0 24 24"><path d="M12 2C7 2 3 6 3 11c0 6.5 9 11 9 11s9-4.5 9-11c0-5-4-9-9-9zm0 12a3 3 0 110-6 3 3 0 010 6z"/></svg>Al Olaya District, Riyadh, Saudi Arabia</li>
            <li><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>+966 50 000 0000</li>
            <li><svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 12V9l-8 6-8-6v9h16z"/></svg>info@nasharabia.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> Nash Arabia General Contracting Co. All rights reserved.</span>
        <span>Designed for excellence in Saudi industrial contracting.</span>
      </div>
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if(h) h.innerHTML = headerHTML;
    if(f) f.innerHTML = footerHTML;
    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();

    // sticky shadow
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if(navbar) navbar.classList.toggle('is-stuck', window.scrollY > 30);
    });

    // mobile toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if(toggle && links){
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
      });
      // close menu when any link (excluding services toggle on mobile) is clicked
      links.querySelectorAll('a:not(.nav-dropdown-wrap > a)').forEach(a => a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      }));
    }

    if(window.initPageAnimations) window.initPageAnimations();
  });
})();