const emailInput = document.getElementById("email-address");
const submitBtn = document.querySelector("button");
const errorMessage = document.getElementById("inValid");
const errorIcon = document.querySelector(".error-icon");

submitBtn.addEventListener("click", isValidEmail);

function isValidEmail() {
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
  }
}

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
