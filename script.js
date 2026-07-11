const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

function closeMenu() {
  menu.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  menu.hidden = open;
  toggle.setAttribute("aria-expanded", String(!open));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
