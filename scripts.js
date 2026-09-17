(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* storage unavailable — theme just won't persist */
    }
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  // Apply saved preference immediately (also run inline in <head> to avoid flash,
  // but this covers browsers where the inline snippet was skipped).
  var saved = getStoredTheme();
  if (saved) applyTheme(saved);

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = root.getAttribute("data-theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var effectiveCurrent = current || (prefersDark ? "dark" : "light");
        var next = effectiveCurrent === "dark" ? "light" : "dark";
        applyTheme(next);
        setStoredTheme(next);
      });
    }

    // Mark the current page's nav link
    var here = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navlinks a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === here || (here === "" && href === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  });
})();