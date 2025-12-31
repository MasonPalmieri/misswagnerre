// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple "mailto" handler so the form works without a backend
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const name = data.get("name");
  const email = data.get("email");
  const topic = data.get("topic");
  const message = data.get("message");

  // Replace this with Missy's business email when you have it:
  const toEmail = "example@email.com";

  const subject = encodeURIComponent(`Website inquiry: ${topic}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nTopic: ${topic}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
