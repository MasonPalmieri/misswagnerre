// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  // Close menu on link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

// Scroll-aware header shadow
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 10) {
    header.style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)";
  } else {
    header.style.boxShadow = "none";
  }
  lastScroll = y;
}, { passive: true });

// Contact form -> mailto
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const toEmail = "missywagner@kw.com";
    const subject = encodeURIComponent("New message from MissyWagnerRE.com");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  });
}

// Fallback for scroll-driven animations (browsers without support)
if (!CSS.supports("animation-timeline: scroll()")) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}
