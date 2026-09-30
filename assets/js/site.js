/* ============================================================
   ResizeHub - Dynamic Header, Nav, Footer
   Includes ResizeHub SVG logo mark (gradient cyan/blue/purple)
   ============================================================ */

(function () {
  "use strict";

  var GROUPS = [
    {
      label: "Resize to KB",
      href: "/resize-to-kb/",
      items: [
        { title: "20KB",  sub: "FPSC, UPSC, IBPS",     href: "/resize-to-kb/20kb.html" },
        { title: "50KB",  sub: "NADRA CNIC, FPSC",     href: "/resize-to-kb/50kb.html" },
        { title: "100KB", sub: "PPSC, UPSC signature", href: "/resize-to-kb/100kb.html" },
        { title: "200KB", sub: "General uploads",      href: "/resize-to-kb/200kb.html" },
        { title: "500KB", sub: "Higher quality",       href: "/resize-to-kb/500kb.html" }
      ]
    },
    {
      label: "Photos",
      href: "/signature/",
      items: [
        { title: "Signature Resize",    sub: "UPSC, IBPS, FPSC", href: "/signature/" },
        { title: "Pakistan Passport",   sub: "35 x 45mm",        href: "/passport-photo/pakistan.html" },
        { title: "India Passport",      sub: "35 x 35mm",        href: "/passport-photo/india.html" },
        { title: "US Passport",         sub: "2 x 2 inch",       href: "/passport-photo/us.html" },
        { title: "UK Passport",         sub: "35 x 45mm",        href: "/passport-photo/uk.html" },
        { title: "Bangladesh Passport", sub: "35 x 45mm",        href: "/passport-photo/bangladesh.html" }
      ]
    },
    {
      label: "Govt Forms",
      href: "/cnic-resize/",
      items: [
        { title: "NADRA CNIC", sub: "Photo resizer",       href: "/cnic-resize/" },
        { title: "FPSC Photo", sub: "200 x 200 px",        href: "/fpsc-photo/" },
        { title: "IBPS",       sub: "Photo and signature", href: "/ibps-photo/" },
        { title: "UPSC",       sub: "Photo and signature", href: "/upsc-photo/" }
      ]
    },
    {
      label: "PDF Tools",
      href: "/pdf-merge/",
      items: [
        { title: "Merge PDF",    sub: "Combine files",   href: "/pdf-merge/" },
        { title: "Split PDF",    sub: "Extract pages",   href: "/pdf-split/" },
        { title: "Compress PDF", sub: "Shrink size",     href: "/pdf-compress/" },
        { title: "PDF to JPG",   sub: "Pages to images", href: "/pdf-to-jpg/" },
        { title: "JPG to PDF",   sub: "Images to PDF",   href: "/jpg-to-pdf/" }
      ]
    },
    {
      label: "Converters",
      href: "/heic-converter/",
      items: [
        { title: "HEIC to JPG", sub: "iPhone photos",    href: "/heic-converter/" },
        { title: "PNG to JPG",  sub: "For form uploads", href: "/png-to-jpg/" },
        { title: "WebP to JPG", sub: "Modern format",    href: "/webp-to-jpg/" }
      ]
    }
  ];

  var CHEV = '<svg class="rh-chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.5L6 7.5L9 4.5"/></svg>';

  // ResizeHub logo mark (SVG icon)
  var LOGO_MARK =
    '<svg class="rh-logo-mark" viewBox="0 0 220 220" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="rh-logo-grad" x1="0" y1="0" x2="220" y2="220">' +
          '<stop offset="0%" stop-color="#00D4FF"/>' +
          '<stop offset="50%" stop-color="#2563EB"/>' +
          '<stop offset="100%" stop-color="#A855F7"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M140 20 L200 20 L200 80" stroke="url(#rh-logo-grad)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<line x1="140" y1="80" x2="200" y2="20" stroke="url(#rh-logo-grad)" stroke-width="22" stroke-linecap="round"/>' +
      '<path d="M80 200 L20 200 L20 140" stroke="url(#rh-logo-grad)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<line x1="80" y1="140" x2="20" y2="200" stroke="url(#rh-logo-grad)" stroke-width="22" stroke-linecap="round"/>' +
      '<rect x="55" y="55" width="110" height="110" rx="20" stroke="url(#rh-logo-grad)" stroke-width="12" fill="none"/>' +
    '</svg>';

  function buildHeader() {
    var header = document.createElement("header");
    header.className = "rh-header";

    var inner = document.createElement("div");
    inner.className = "rh-header-inner";

    // Logo
    var logo = document.createElement("a");
    logo.className = "rh-logo";
    logo.href = "/";
    logo.innerHTML = LOGO_MARK + '<span class="rh-logo-text">ResizeHub</span>';

    // Desktop nav
    var nav = document.createElement("nav");
    nav.className = "rh-nav";

    GROUPS.forEach(function (g) {
      var group = document.createElement("div");
      group.className = "rh-nav-group";

      var btn = document.createElement("button");
      btn.className = "rh-nav-btn";
      btn.type = "button";
      btn.innerHTML = g.label + " " + CHEV;

      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = group.classList.contains("open");
        document.querySelectorAll(".rh-nav-group.open").forEach(function (el) {
          el.classList.remove("open");
        });
        if (!isOpen) group.classList.add("open");
      });

      var dd = document.createElement("div");
      dd.className = "rh-dropdown";

      g.items.forEach(function (item) {
        var a = document.createElement("a");
        a.href = item.href;
        a.innerHTML =
          '<span class="rh-dd-title">' + item.title + "</span>" +
          '<span class="rh-dd-sub">' + item.sub + "</span>";
        dd.appendChild(a);
      });

      group.appendChild(btn);
      group.appendChild(dd);
      nav.appendChild(group);
    });

    // Mobile toggle
    var toggle = document.createElement("button");
    toggle.className = "rh-menu-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Menu");
    toggle.innerHTML = "<span></span>";

    inner.appendChild(logo);
    inner.appendChild(nav);
    inner.appendChild(toggle);
    header.appendChild(inner);

    document.body.insertBefore(header, document.body.firstChild);

    // Mobile panel
    var panel = document.createElement("div");
    panel.className = "rh-mobile-panel";

    GROUPS.forEach(function (g) {
      var mg = document.createElement("div");
      mg.className = "rh-mobile-group";

      var h = document.createElement("h4");
      h.textContent = g.label;
      mg.appendChild(h);

      g.items.forEach(function (item) {
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.title;
        mg.appendChild(a);
      });

      panel.appendChild(mg);
    });

    document.body.appendChild(panel);

    toggle.addEventListener("click", function () {
      panel.classList.toggle("open");
      document.body.style.overflow = panel.classList.contains("open") ? "hidden" : "";
    });

    document.addEventListener("click", function () {
      document.querySelectorAll(".rh-nav-group.open").forEach(function (el) {
        el.classList.remove("open");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.querySelectorAll(".rh-nav-group.open").forEach(function (el) {
          el.classList.remove("open");
        });
        panel.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  function buildFooter() {
    var footer = document.createElement("footer");
    footer.className = "rh-footer";

    var inner = document.createElement("div");
    inner.className = "rh-footer-inner";

    var brand = document.createElement("div");
    brand.className = "rh-footer-brand";
    brand.innerHTML =
      '<a class="rh-logo" href="/" style="margin-bottom:8px;">' +
        LOGO_MARK +
        '<span class="rh-logo-text">ResizeHub</span>' +
      "</a>" +
      "<p>Exact KB and government form tools for Pakistan, India, Bangladesh and MENA. 100 percent private - nothing is uploaded.</p>";

    var columns = [
      { title: "Popular",           items: GROUPS[0].items.slice(0, 4) },
      { title: "Photos",            items: GROUPS[1].items.slice(0, 4) },
      { title: "PDF and Converters", items: GROUPS[3].items.concat(GROUPS[4].items.slice(0, 2)) }
    ];

    var columnEls = columns.map(function (col) {
      var div = document.createElement("div");
      var h = document.createElement("h4");
      h.textContent = col.title;
      div.appendChild(h);
      var ul = document.createElement("ul");
      col.items.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      div.appendChild(ul);
      return div;
    });

    inner.appendChild(brand);
    columnEls.forEach(function (el) { inner.appendChild(el); });
    footer.appendChild(inner);

    var bottom = document.createElement("div");
    bottom.className = "rh-footer-bottom";
    bottom.innerHTML = 'Designed and built by <strong>Nasir Naqvi</strong>';
    footer.appendChild(bottom);

    document.body.appendChild(footer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      buildHeader();
      buildFooter();
    });
  } else {
    buildHeader();
    buildFooter();
  }
})();