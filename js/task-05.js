const input = document.querySelector("input");
const spanOutput = document.querySelector("span");

input.addEventListener("input", () => {
  if (input.value === "") {
    spanOutput.textContent = "Anonymous";
  } else {
    spanOutput.textContent = input.value;
  }
});
