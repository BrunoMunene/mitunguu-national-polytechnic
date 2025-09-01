
// Mobile menu toggle + submenu toggles
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !expanded);
      mobileMenu.classList.toggle("hidden");
    });
  }
  document.querySelectorAll(".submenu-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      if (submenu) submenu.classList.toggle("hidden");
    });
  });
});
