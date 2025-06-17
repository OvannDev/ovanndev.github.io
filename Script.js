const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);
});
