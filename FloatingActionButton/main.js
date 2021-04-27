const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});
