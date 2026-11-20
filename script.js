/* =========================================================
   xmtaha — profil sayfası etkileşimleri
   ========================================================= */

/* ---------- Mobil menü ---------- */

const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
};

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target)) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) setMenu(false);
});

/* ---------- Header, yukarı çık ve scrollspy ---------- */

const header = document.getElementById("site-header");
const toTop = document.getElementById("to-top");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
  toTop.classList.toggle("is-visible", window.scrollY > 600);
};

onScroll();
window.addEventListener(
  "scroll",
  () => {
    window.requestAnimationFrame(onScroll);
  },
  { passive: true }
);

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
});

const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

if ("IntersectionObserver" in window && sections.length) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === id;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
}

/* ---------- İstanbul saati ve yıl ---------- */

const timeFormatter = new Intl.DateTimeFormat("tr-TR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Istanbul",
});

const updateClocks = () => {
  const now = new Date();
  const formatted = timeFormatter.format(now);
  document.querySelectorAll(".local-time").forEach((node) => {
    node.textContent = formatted;
    node.setAttribute("datetime", now.toISOString());
  });
};

updateClocks();
window.setInterval(updateClocks, 30000);

document.getElementById("year").textContent = String(new Date().getFullYear());