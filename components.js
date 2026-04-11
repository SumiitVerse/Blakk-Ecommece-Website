// components.js - Shared Navbar & Footer

document.addEventListener('DOMContentLoaded', () => {

  // ---- Inject Navbar ----
  const navbarHTML = `
  <nav class="navbar" id="navbar">
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo">
        BLAKK
        <span>Luxury & Digital</span>
      </a>

      <ul class="navbar__menu">
        <li><a href="index.html" class="navbar__link">Home</a></li>
        <li><a href="collection.html" class="navbar__link">Collection</a></li>
        <li class="navbar__item">
          <a href="services.html" class="navbar__link">Services</a>
          <div class="dropdown">
            <a href="email-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> Email Marketing</a>
            <a href="sms-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> SMS Marketing</a>
            <a href="social-media-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> Social Media</a>
            <a href="content-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> Content Marketing</a>
            <a href="affiliate-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> Affiliate Marketing</a>
            <a href="video-marketing.html" class="dropdown__link"><span class="dropdown__icon"></span> Video Marketing</a>
          </div>
        </li>
        <li><a href="blog.html" class="navbar__link">Blog</a></li>
        <li><a href="about.html" class="navbar__link">About</a></li>
        <li><a href="contact.html" class="navbar__link">Contact</a></li>
      </ul>

      <div class="navbar__actions">
        <a href="collection.html" class="btn btn--primary navbar__cta">Shop Collection</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <a href="index.html" class="mobile-nav__link">Home</a>
    <a href="collection.html" class="mobile-nav__link">Collection</a>
    <a href="services.html" class="mobile-nav__link">Services</a>
    <div class="mobile-nav__sub">
      <a href="email-marketing.html" class="mobile-nav__link">Email Marketing</a>
      <a href="sms-marketing.html" class="mobile-nav__link"> SMS Marketing</a>
      <a href="social-media-marketing.html" class="mobile-nav__link">Social Media Marketing</a>
      <a href="content-marketing.html" class="mobile-nav__link"> Content Marketing</a>
      <a href="affiliate-marketing.html" class="mobile-nav__link"> Affiliate Marketing</a>
      <a href="video-marketing.html" class="mobile-nav__link"> Video Marketing</a>
    </div>
    <a href="blog.html" class="mobile-nav__link">Blog</a>
    <a href="about.html" class="mobile-nav__link">About</a>
    <a href="contact.html" class="mobile-nav__link">Contact</a>
    <a href="collection.html" class="btn btn--primary" style="margin-top:1.5rem;width:100%;justify-content:center;">Shop Collection</a>
  </div>`;

  // ---- Inject Footer ----
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand-name">BLAKK</div>
          <p class="footer__desc">Where luxury fashion meets cutting-edge digital marketing. We craft experiences that elevate brands to iconic status.</p>
          <div class="footer__social">
            <a href="#" class="social-link" aria-label="Instagram"><wa-icon name="instagram" family="brands"></wa-icon></a>
            <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
            <a href="#" class="social-link" aria-label="Facebook">ƒ</a>
            <a href="#" class="social-link" aria-label="LinkedIn">in</a>
            <a href="#" class="social-link" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div>
          <h4 class="footer__col-title">Quick Links</h4>
          <ul class="footer__links">
            <li><a href="index.html">→ Home</a></li>
            <li><a href="collection.html">→ Collection</a></li>
            <li><a href="services.html">→ Services</a></li>
            <li><a href="blog.html">→ Blog</a></li>
            <li><a href="about.html">→ About</a></li>
            <li><a href="contact.html">→ Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__col-title">Services</h4>
          <ul class="footer__links">
            <li><a href="email-marketing.html">→ Email Marketing</a></li>
            <li><a href="sms-marketing.html">→ SMS Marketing</a></li>
            <li><a href="social-media-marketing.html">→ Social Media</a></li>
            <li><a href="content-marketing.html">→ Content Marketing</a></li>
            <li><a href="affiliate-marketing.html">→ Affiliate</a></li>
            <li><a href="video-marketing.html">→ Video Marketing</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__col-title">Newsletter</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Subscribe for exclusive drops, style guides & marketing insights.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email address">
            <button type="button">Join</button>
          </div>
          <p style="margin-top:1rem;font-size:0.75rem;color:var(--text-muted);">📍 Mumbai, India &nbsp;|&nbsp; 📞 +91 98765 43210</p>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© 2025 BLAKK. All rights reserved.</p>
        <nav class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </nav>
      </div>
    </div>
  </footer>`;

  // Insert navbar at top of body
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) navContainer.innerHTML = navbarHTML;

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // ---- Navbar Scroll ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ---- Hamburger ----
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
  }

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .mobile-nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

});
