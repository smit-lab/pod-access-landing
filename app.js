let form = document.getElementById("form");
let email = document.getElementById("email");
let errorMsg = document.getElementById("error");

email.addEventListener("input", validateForm);
form.addEventListener("submit", submitForm);

function validateForm() {
  let emailValue = email.value;
  let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.match(regexp)) {
    errorMsg.textContent = null;
    return true;
  } else {
    errorMsg.classList.add("erro-msg");
    errorMsg.textContent = "Oops! Please check your email";
    return false;
  }
}

function submitForm(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
}
