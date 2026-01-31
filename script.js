// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(showSlide, 3000);

// CTA BUTTON
function ctaClick() {
  alert("🚀 Let's build something amazing together!");
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
}

// LEARN MORE BUTTON
function learnMore(service) {
  alert("More details about " + service + " coming soon!");
}

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill all fields!");
  } else {
    alert("✅ Message sent successfully!");
    this.reset();
  }
});
