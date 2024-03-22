document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInputField = document.getElementById("deposit-input");
  const depositInputValue = depositInputField.value;
  const depositTextElement = document.getElementById("deposit-text");
  const depositTotal = depositTextElement.innerText;
  depositTextElement.innerText = depositInputValue;

  //
  depositInputField.value = "";
});
