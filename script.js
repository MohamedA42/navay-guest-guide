const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  siteNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      siteNav.classList.remove("open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}