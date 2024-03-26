document.getElementById("withdraw-btn").addEventListener("click", function () {
  // withdraw input
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldString = withdrawField.value;
  const previousWithdrawField = parseFloat(withdrawFieldString);

  //   withdraw balance
  const withdrawBalance = document.getElementById("withdraw-balance");
  const withdrawBalanceString = withdrawBalance.innerText;
  const previousWithdrawBalance = parseFloat(withdrawBalanceString);

  //   deposit balance
  const depositBalance = document.getElementById("balance-text");
  const depositBalanceString = depositBalance.innerText;
  const previousDepositBalance = parseFloat(depositBalanceString);

  if (previousDepositBalance > previousWithdrawField) {
    const newWithdrawBalance = previousWithdrawBalance + previousWithdrawField;

    withdrawBalance.innerText = newWithdrawBalance;
    const newDepositBalance = previousDepositBalance - previousWithdrawField;
    depositBalance.innerText = newDepositBalance;
  } else {
    alert("you do not have sufficient balance");
  }

  withdrawField.value = "";
});
