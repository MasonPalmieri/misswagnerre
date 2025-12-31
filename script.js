document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const toEmail = "missywagner@kw.com";
  const subject = encodeURIComponent("Website inquiry (MissyWagnerRE.com)");

  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
