document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (email === "shahin@.com" && password === "shahin") {
    window.location.href = "bank.html";
  } else {
    alert("invalid password");
  }
});
