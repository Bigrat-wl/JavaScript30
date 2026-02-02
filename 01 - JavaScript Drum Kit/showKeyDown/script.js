const keyDisplay = document.getElementById("keyDisplay");

window.addEventListener("keydown", (event) => {
  const key = event.key;
  keyDisplay.textContent = key.toUpperCase();
});
