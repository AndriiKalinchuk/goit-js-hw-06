const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = loginForm.elements;
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  if (email.value === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    return formData;
  }

  console.log(formData);
  loginForm.reset();
}
