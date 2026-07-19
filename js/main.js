/* Compass Wellbeing — interactions */
(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a nav link is tapped
    header.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var isOpen = item.classList.toggle("open");
      q.setAttribute("aria-expanded", isOpen ? "true" : "false");
      a.style.maxHeight = isOpen ? a.scrollHeight + "px" : null;
    });
  });

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- Contact form (Formspree AJAX) ----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // If Formspree endpoint hasn't been set yet, fall back to normal behaviour.
      var action = form.getAttribute("action") || "";
      if (action.indexOf("formspree.io") === -1 && action.indexOf("YOUR_FORM_ID") === -1) return;
      if (action.indexOf("YOUR_FORM_ID") !== -1) return; // let it submit / show placeholder

      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var success = document.getElementById("form-success");
      var original = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.style.display = "none";
          if (success) success.classList.add("show");
        } else {
          alert("Sorry, something went wrong. Please email enquiries@compasswellbeing.co.nz");
        }
      }).catch(function () {
        alert("Sorry, something went wrong. Please email enquiries@compasswellbeing.co.nz");
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = original; }
      });
    });
  }

  // ---- Scroll-spy for one-page nav (home page) ----
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if (spyLinks.length && "IntersectionObserver" in window) {
    var sections = spyLinks
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    if (sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            spyLinks.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  // ---- Footer year ----
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
