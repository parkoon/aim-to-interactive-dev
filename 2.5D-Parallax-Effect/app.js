function parallax(element, distance, speed, zAxis) {
  const item = document.querySelector(element);

  item.style.transform = zAxis
    ? `translateY(${distance * speed}px) translateZ(${distance * speed}px)`
    : `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", () => {
  parallax(".small-rose", window.scrollY, 1);
  parallax(".big-rose", window.scrollY, 0.5, true);
});
