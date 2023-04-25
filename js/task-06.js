const input = document.querySelector("input");

input.addEventListener("blur", () => {
  if (input.getAttribute("data-length") > input.value.length) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
