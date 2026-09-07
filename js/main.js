(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  var navLinks = document.querySelectorAll(".nav-link");
  var reveals = document.querySelectorAll(".reveal");
  var yearEl = document.getElementById("year");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sticky header shadow on scroll
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("open", !expanded);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("open");
      });
    });
  }

  // Reveal-on-scroll
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Active nav link on scroll
  var sections = Array.prototype.map.call(navLinks, function (link) {
    var id = link.getAttribute("href");
    return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
  });

  function setActiveLink() {
    var scrollPos = window.scrollY + 140;
    var activeIndex = -1;
    sections.forEach(function (section, i) {
      if (section && section.offsetTop <= scrollPos) {
        activeIndex = i;
      }
    });
    navLinks.forEach(function (link, i) {
      link.classList.toggle("active", i === activeIndex);
    });
  }
  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
})();
