// 1. Footer year: updates automatically every year
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Light / dark mode button
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  toggle.setAttribute("aria-pressed", theme === "dark");
  localStorage.setItem("theme", theme); // remember the choice
}

// On load: use the saved choice, or the visitor's system setting
const saved = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (systemPrefersDark ? "dark" : "light"));

// When the button is clicked, switch themes
toggle.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});