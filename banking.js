//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const CurrentDepositAmount = depositInput.value
    /*  console.log(depositAmount); */

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText
    const newDepositAmount = CurrentDepositAmount
    depositTotal.innerText = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    //update deposit total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = '';
})
