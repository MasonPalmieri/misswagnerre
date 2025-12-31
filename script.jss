// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mailto form (no backend needed)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const topic = (data.get("topic") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const toEmail = "missywagner@kw.com";

  const subject = encodeURIComponent(`Website inquiry: ${topic || "General"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nTopic: ${topic}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
