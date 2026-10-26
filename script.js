
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const backToTop = document.getElementById("backToTop");

// Update copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Back-to-top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form validation and email draft
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  // Replace this with your actual email address.
  const recipient = "your-email@example.com";

  if (recipient === "your-email@example.com") {
    formStatus.textContent =
      "Demo mode: replace the email address in script.js with your own to prepare an email.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  formStatus.textContent = "Opening your email application...";
  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});
