// Linka Digital — Standalone JS

// Inicializa Tema Claro/Escuro
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
}

// ⬇️ ATUALIZE ESTES DOIS VALORES ⬇️
const WHATSAPP_NUMBER = "5531999331297"; // formato: 55 + DDD + número
const INSTAGRAM_HANDLE = "linkastudio.br"; // sem @

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Linka Digital e gostaria de fazer um orçamento."
)}`;
const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;

// Aplica links dinâmicos
["aboutWhats", "ctaWhats", "footWhats", "floatWhats"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = WHATSAPP_LINK;
});
["aboutInsta", "footInsta"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = INSTAGRAM_LINK;
});

// Ano dinâmico
document.getElementById("year").textContent = new Date().getFullYear();

// Nav scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const toggle = document.getElementById("navToggle");
const mobile = document.getElementById("navMobile");
toggle.addEventListener("click", () => mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobile.classList.remove("open"))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Controle do Botão de Alternância de Tema
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}