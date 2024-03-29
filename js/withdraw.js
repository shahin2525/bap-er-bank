document.getElementById("withdraw-btn").addEventListener("click", function () {
  // withdraw input
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldString = withdrawField.value;
  const previousWithdrawField = parseFloat(withdrawFieldString);
  //
  withdrawField.value = "";

  if (isNaN(previousWithdrawField)) {
    alert("please provide correct amount number ");
    return;
  }

  //   withdraw balance
  const withdrawBalance = document.getElementById("withdraw-balance");
  const withdrawBalanceString = withdrawBalance.innerText;
  const previousWithdrawBalance = parseFloat(withdrawBalanceString);

  //   deposit balance
  const depositBalance = document.getElementById("balance-text");
  const depositBalanceString = depositBalance.innerText;
  const previousDepositBalance = parseFloat(depositBalanceString);

  //
  if (previousDepositBalance < previousWithdrawField) {
    alert("you do not have sufficient balance");
    return;
  }
  const newWithdrawBalance = previousWithdrawBalance + previousWithdrawField;

  withdrawBalance.innerText = newWithdrawBalance;
  const newDepositBalance = previousDepositBalance - previousWithdrawField;
  depositBalance.innerText = newDepositBalance;
});
