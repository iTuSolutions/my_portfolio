
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => navMenu.classList.toggle("hidden"));
  }

  document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      const icon = detail.querySelector("summary span");
      if (icon) icon.textContent = detail.open ? "−" : "+";
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add("visible"));
  }

  const form = document.getElementById("quoteForm");
  const message = document.getElementById("formMessage");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.textContent = "Thank you. Your enquiry has been captured on this demo form. Connect the form to your email/CRM service before publishing.";
      message.classList.remove("hidden");
      form.reset();
    });
  }
});
