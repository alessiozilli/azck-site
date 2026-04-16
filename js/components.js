/* ========================================
   AZCK Shared Components — Header + Footer
   Injects consistent nav and footer on every page.
   One file. One source of truth.

   Phase 1: Added Booking, Gift Cards to nav. Admin link in footer.
   Phase 3: Added newsletter signup in footer.
   ======================================== */
(function () {
  'use strict';

  // Detect if we're at root or in pages/ subdirectory
  var path = window.location.pathname;
  var isRoot = path === '/' || path.endsWith('/index.html') || path.endsWith('/404.html') || (!path.includes('/pages/') && path.split('/').length <= 2);
  var filename = path.split('/').pop();
  var rootFiles = ['index.html', '404.html', ''];
  if (rootFiles.indexOf(filename) === -1 && !path.includes('/pages/')) {
    isRoot = rootFiles.indexOf(filename) > -1;
  }

  // Simple prefix for links
  var prefix = isRoot ? 'pages/' : '';
  var homeLink = isRoot ? 'index.html' : '../index.html';

  // ========== HEADER ==========
  var headerHTML = ''
    + '<header class="azck-header" id="azck-header">'
    + '  <div class="azck-header__inner">'
    + '    <a href="' + homeLink + '" class="azck-header__logo">AZ Custom <span>Knives</span></a>'
    + '    <nav class="azck-nav" id="azck-nav">'
    + '      <a href="' + prefix + 'classes.html" class="azck-nav__link" data-page="classes">Classes</a>'
    + '      <a href="' + prefix + 'booking.html#services" class="azck-nav__link" data-page="booking-services">Services</a>'
    + '      <a href="' + prefix + 'booking.html" class="azck-nav__link" data-page="booking">Booking</a>'
    + '      <a href="' + prefix + 'portfolio.html" class="azck-nav__link" data-page="portfolio">Portfolio</a>'
    + '      <a href="' + prefix + 'quadfang.html" class="azck-nav__link" data-page="quadfang">QuadFang</a>'
    + '      <a href="' + prefix + 'gift-certificates.html" class="azck-nav__link" data-page="gift-certificates">Gift Cards</a>'
    + '      <a href="' + prefix + 'about.html" class="azck-nav__link" data-page="about">About</a>'
    + '      <a href="' + prefix + 'contact.html" class="azck-nav__link" data-page="contact">Contact</a>'
    + '      <a href="https://shop.azcustomknives.com" class="azck-nav__shop" target="_blank" rel="noopener">Shop</a>'
    + '    </nav>'
    + '    <button class="azck-menu-toggle" id="azck-menu-toggle" aria-label="Menu">'
    + '      <span></span><span></span><span></span>'
    + '    </button>'
    + '  </div>'
    + '</header>';

  // ========== FOOTER ==========
  var footerHTML = ''
    + '<footer class="azck-footer">'
    + '  <div class="azck-footer__inner">'
    + '    <div class="azck-footer__row">'
    + '      <p class="azck-footer__copy">&copy; 2026 AZ Custom Knives Ltd. All rights reserved.</p>'
    + '      <div class="azck-footer__socials">'
    + '        <a href="https://www.facebook.com/azcustomknives" target="_blank" rel="noopener" aria-label="Facebook" class="azck-footer__social">'
    + '          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
    + '        </a>'
    + '        <a href="https://www.instagram.com/az_custom_knives" target="_blank" rel="noopener" aria-label="Instagram" class="azck-footer__social">'
    + '          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
    + '        </a>'
    + '        <a href="https://www.youtube.com/channel/UCAV8Nd33PnuLJ8TRjyv20JA" target="_blank" rel="noopener" aria-label="YouTube" class="azck-footer__social">'
    + '          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
    + '        </a>'
    + '      </div>'
    + '    </div>'
    + '    <div class="azck-footer__newsletter" id="azck-newsletter">'
    + '      <p class="azck-footer__newsletter-label">Get workshop updates, tips &amp; exclusive offers:</p>'
    + '      <form class="azck-footer__newsletter-form" id="azck-newsletter-form">'
    + '        <input type="email" placeholder="Your email" required class="azck-footer__newsletter-input" id="azck-newsletter-email" autocomplete="email">'
    + '        <button type="submit" class="azck-footer__newsletter-btn">Subscribe</button>'
    + '      </form>'
    + '      <p class="azck-footer__newsletter-msg" id="azck-newsletter-msg" style="display:none;"></p>'
    + '    </div>'
    + '    <a href="https://command.azcustomknives.com" class="azck-footer__admin" target="_blank" rel="noopener">Admin</a>'
    + '  </div>'
    + '</footer>';

  // ========== INJECT ==========
  // Header
  var headerTarget = document.getElementById('site-header');
  if (headerTarget) {
    headerTarget.outerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // Footer
  var footerTarget = document.getElementById('site-footer');
  if (footerTarget) {
    footerTarget.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // ========== NEWSLETTER FORM ==========
  var nlForm = document.getElementById('azck-newsletter-form');
  var nlMsg = document.getElementById('azck-newsletter-msg');
  var nlEmail = document.getElementById('azck-newsletter-email');

  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = nlEmail.value.trim();
      if (!email) return;

      // ---- SUPABASE CONFIG ----
      // When newsletter_subscribers table is created, uncomment this block:
      /*
      var SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
      var SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
      fetch(SUPABASE_URL + '/rest/v1/newsletter_subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ email: email, subscribed_at: new Date().toISOString() })
      })
      .then(function (res) {
        if (res.ok) {
          showMsg('Thanks! You\'re on the list.', true);
        } else if (res.status === 409) {
          showMsg('You\'re already subscribed!', true);
        } else {
          showMsg('Something went wrong. Email us directly!', false);
        }
      })
      .catch(function () {
        showMsg('Something went wrong. Email us directly!', false);
      });
      */

      // ---- TEMPORARY: mailto fallback until Supabase is connected ----
      showMsg('Thanks! We\'ll add you to our list.', true);
      var mailto = 'mailto:admin@azcustomknives.com?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20AZCK%20newsletter:%20' + encodeURIComponent(email);
      // Open mailto silently in background
      var a = document.createElement('a');
      a.href = mailto;
      a.target = '_blank';
      a.click();
    });
  }

  function showMsg(text, success) {
    if (!nlMsg) return;
    nlMsg.textContent = text;
    nlMsg.style.display = 'block';
    nlMsg.style.color = success ? '#4CAF50' : '#990000';
    nlForm.style.display = 'none';
  }

  // ========== ACTIVE STATE ==========
  var currentPage = filename.replace('.html', '');
  var navLinks = document.querySelectorAll('.azck-nav__link');

  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var pageName = link.getAttribute('data-page');

    if (pageName === currentPage || (currentPage === '' && pageName === 'home') || (currentPage === 'index' && pageName === 'home')) {
      link.classList.add('azck-nav__link--active');
    }
    if (currentPage === 'booking' && pageName === 'booking-services' && window.location.hash === '#services') {
      link.classList.add('azck-nav__link--active');
    }
    if (currentPage === 'booking' && pageName === 'booking' && window.location.hash !== '#services') {
      link.classList.add('azck-nav__link--active');
    }
    // Preview pages highlight Classes
    if (currentPage === 'preview-blacksmithing' && pageName === 'classes') {
      link.classList.add('azck-nav__link--active');
    }
    if (currentPage === 'preview-knifemaking' && pageName === 'classes') {
      link.classList.add('azck-nav__link--active');
    }
    if (currentPage === 'preview-teambuilding' && pageName === 'classes') {
      link.classList.add('azck-nav__link--active');
    }
    // Blog highlights nothing — no nav item for it
    if (currentPage === 'blog' && pageName === 'blog') {
      link.classList.add('azck-nav__link--active');
    }
  }

  // ========== MOBILE MENU ==========
  var menuBtn = document.getElementById('azck-menu-toggle');
  var nav = document.getElementById('azck-nav');
  var header = document.getElementById('azck-header');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('azck-nav--open');
      menuBtn.classList.toggle('azck-menu-toggle--active');
    });
    var links = nav.querySelectorAll('a');
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener('click', function () {
        nav.classList.remove('azck-nav--open');
        menuBtn.classList.remove('azck-menu-toggle--active');
      });
    }
  }

  // ========== STICKY HEADER SHADOW ==========
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('azck-header--scrolled');
      } else {
        header.classList.remove('azck-header--scrolled');
      }
    });
  }

})();
