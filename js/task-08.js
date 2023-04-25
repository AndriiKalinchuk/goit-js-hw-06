const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = loginForm.elements;
  const formData = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    console.log(formData);
    loginForm.reset();
  }
}
