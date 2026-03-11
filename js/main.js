/* ── NAV: add scrolled class ─────────────────────────────────── */
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

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
