document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInputField = document.getElementById("deposit-input");
  const depositInputValueString = depositInputField.value;
  const newDeposit = parseFloat(depositInputValueString);
  //
  depositInputField.value = "";

  if (isNaN(newDeposit)) {
    alert("please provide correct deposit amount number ");
    return;
  }
  const depositTextElement = document.getElementById("deposit-text");
  const depositTotalString = depositTextElement.innerText;
  const previousDepositTotal = parseFloat(depositTotalString);
  const currentDepositTotal = previousDepositTotal + newDeposit;
  depositTextElement.innerText = currentDepositTotal;

  //   balance
  const balanceElementText = document.getElementById("balance-text");
  const balanceElementTextString = balanceElementText.innerText;
  const previousBalance = parseFloat(balanceElementTextString);
  const newBalanceTotal = newDeposit + previousBalance;
  balanceElementText.innerText = newBalanceTotal;

  //
  depositInputField.value = "";
});
