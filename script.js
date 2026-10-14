const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const recipient = "mohit.kr.qa@gmail.com"; // Replace with your real email.
  const subject = encodeURIComponent(`Portfolio contact: ${data.get("topic")}`);
  const body = encodeURIComponent(
    `Hi Mohit,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}\nTopic: ${data.get("topic")}`
  );

  formNote.textContent = "Opening your email app with a prepared message. Replace the sample email address in script.js before publishing.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});