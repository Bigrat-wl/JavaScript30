const keyDisplay = document.getElementById("keyDisplay");

const key = document.querySelector("#key");

window.addEventListener("keydown", (event) => {
  const keyStr = event.key;
  key.textContent = keyStr.toUpperCase();

  const keyCode = event.code;
  keyDisplay.textContent = keyCode;
});
