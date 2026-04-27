// Typing effect
const text = ["Data Scientist", "AI Enthusiast", "ML Developer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  if (!isDeleting && j <= text[i].length) {
    current = text[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = text[i].substring(0, j--);
  }

  document.getElementById("typing").textContent = current;

  if (j === text[i].length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}
type();

// Scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Cursor glow
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});