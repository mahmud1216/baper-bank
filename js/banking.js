//Deposite input thaykay deposite a add

document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositeInput = document.getElementById("deposite-input");
    const depositeInputText = depositeInput.value;
    const NewDepositeValue = parseFloat(depositeInputText);

    const initialDeposite = document.getElementById("intial-deposite");
    const initialDepositeText = initialDeposite.innerText;
    const newInitiaDeposite = parseFloat(initialDepositeText);
    const totalDeposite = newInitiaDeposite + NewDepositeValue;

    initialDeposite.innerText = totalDeposite;

    //Deposite input thaykay total a add

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText);
    const newTotalBalance = totalBalanceValue + NewDepositeValue;
    totalBalance.innerText = newTotalBalance;

    depositeInput.value = "";
  });

//withdraw input thaykay withdraw a add

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    console.log(withdrawInputAmount);

    const initialWithdraw = document.getElementById("initial-withdraw");
    const initialWithdrawText = initialWithdraw.innerText;
    const initialWithdrawValue = parseFloat(initialWithdrawText);
    const totalWithdraw = initialWithdrawValue + withdrawInputAmount;
    initialWithdraw.innerText = totalWithdraw;

    //withdraw thaykay total balance bad

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText);
    const newTotalBalance = totalBalanceValue - withdrawInputAmount;
    totalBalance.innerText = newTotalBalance;

    withdrawInput.value = "";
  });
