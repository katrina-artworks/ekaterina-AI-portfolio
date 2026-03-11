/* ── NAV: scrolled class ─────────────────────────────────────── */
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* ── MOBILE HAMBURGER MENU ───────────────────────────────────── */
const hamburger = document.getElementById("navHamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  navLinks.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

/* ── CURSOR GLOW ─────────────────────────────────────────────── */
const cursorGlow = document.getElementById("cursorGlow");
let glowX = 0, glowY = 0;
let rafPending = false;

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    glowX = e.clientX;
    glowY = e.clientY;

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        cursorGlow.style.transform = `translate(calc(${glowX}px - 50%), calc(${glowY}px - 50%))`;
        cursorGlow.classList.add("active");
        rafPending = false;
      });
    }
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    cursorGlow.classList.remove("active");
  });
}

/* ── SCROLL REVEAL via Intersection Observer ─────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal, .fade-up").forEach((el) => {
  revealObserver.observe(el);
});

/* ── STAGGERED CARD / SKILL-TAG DELAYS ───────────────────────── */
document.querySelectorAll(".work__grid .card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

document.querySelectorAll(".skills__grid .skill-tag").forEach((tag, i) => {
  tag.style.transitionDelay = `${i * 0.06}s`;
});
