const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", (event) => {
  span.style.fontSize = `${input.value}px`;
});
