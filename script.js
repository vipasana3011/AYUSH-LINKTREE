// Floating tech particles generator
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "%";
  
  const size = Math.random() * 30 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
  bubble.style.background = `rgba(0, 188, 212, ${Math.random() * 0.5 + 0.2})`;
  bubble.style.boxShadow = `0 0 ${Math.random() * 15 + 5}px rgba(0, 188, 212, 0.7)`;
  
  document.body.appendChild(bubble);
}

// Fade-in animation for links
window.addEventListener("load", () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
    }, index * 150);
  });
});
