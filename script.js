/* Mindhive — Vanilla UI controller (no dependencies)
   1. Mobile nav toggle
   2. Sticky-nav background on scroll
   3. IntersectionObserver scroll-reveal (.reveal -> .is-in)
   4. Nav scrollspy for same-page #section links
   5. Interactive product tabs & footer copyright year */
(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelectorAll(".nav__link");

  // 1. Mobile navigation drawer toggle
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // 2. Sticky nav elevation on scroll
  function updateNavScroll() {
    if (!nav) return;
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  updateNavScroll();
  window.addEventListener("scroll", updateNavScroll, { passive: true });

  // 3. Scroll-reveal via IntersectionObserver
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length > 0) {
    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
      );
      reveals.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      reveals.forEach(function (el) {
        el.classList.add("is-in");
      });
    }
  }

  // 4. Nav scrollspy for #id anchor links (cross-page links use static .is-active)
  var hashLinks = Array.prototype.filter.call(navLinks, function (link) {
    var href = link.getAttribute("href") || "";
    return href.indexOf("#") === 0 && href.length > 1;
  });

  if (hashLinks.length > 0 && "IntersectionObserver" in window) {
    var sections = [];
    hashLinks.forEach(function (link) {
      var target = document.querySelector(link.getAttribute("href"));
      if (target) sections.push({ link: link, section: target });
    });

    if (sections.length > 0) {
      var spyObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            hashLinks.forEach(function (l) {
              l.classList.remove("is-active");
            });
            sections.forEach(function (item) {
              if (item.section === entry.target) {
                item.link.classList.add("is-active");
              }
            });
          });
        },
        { rootMargin: "-30% 0px -55% 0px" }
      );
      sections.forEach(function (item) {
        spyObserver.observe(item.section);
      });
    }
  }

  // 5. Interactive product switcher tabs on homepage
  var prodTabs = document.querySelectorAll(".prod-tab");
  var prodPanels = document.querySelectorAll(".prodcard[data-product]");
  if (prodTabs.length > 0 && prodPanels.length > 0) {
    prodTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var targetId = tab.getAttribute("data-target");
        prodTabs.forEach(function (t) {
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        prodPanels.forEach(function (panel) {
          if (panel.getAttribute("data-product") === targetId) {
            panel.removeAttribute("hidden");
          } else {
            panel.setAttribute("hidden", "");
          }
        });
      });
    });
  }

  // 6. Footer copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
