function inputValue(inputId){
    const inputField = document.getElementById(inputId).value;
    const inputAmount = parseFloat(inputField);
    document.getElementById(inputId).value = '';
    
    return inputAmount;
}



function updateTotalfield(totalId ,amount) {
    const currentAmount = document.getElementById(totalId).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    document.getElementById(totalId).innerText = currentAmountNumber + amount;
}

function getBalance(){
    const currentBalance =  document.getElementById('balance-total').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    return currentBalanceAmount;
}
function updateBalance(depositOrWithdraw, isAdd) {
    // const currentBalance =  document.getElementById('balance-total').innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);
    const currentBalanceAmount = getBalance();

    if(isAdd == true) {
        document.getElementById('balance-total').innerText = currentBalanceAmount + depositOrWithdraw;
    }
    else{
        document.getElementById('balance-total').innerText = currentBalanceAmount - depositOrWithdraw;
    }
    
}



const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');


//event listener in deposit button
depositBtn.addEventListener('click', function(){
    // const depositField = document.getElementById('deposit-field').value;
    // const depositAmount = parseFloat(depositField);
    const depositAmount = inputValue('deposit-field');
    if(depositAmount > 0) {
        updateTotalfield('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    
    // const currentDeposit = document.getElementById('deposit-total').innerText;
    // const currentDepositAmount = parseFloat(currentDeposit);
    // document.getElementById('deposit-total').innerText = currentDepositAmount + depositAmount;
    


    // const currentBalance =  document.getElementById('balance-total').innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);

    // document.getElementById('balance-total').innerText = currentBalanceAmount + depositAmount;
    

})


withdrawBtn.addEventListener('click', function(){
    // const withdrawField = document.getElementById('withdraw-field').value;
    // const withdrawAmount = parseFloat(withdrawField);
    const withdrawAmount = inputValue('withdraw-field');
    const actualBalance = getBalance();
    if(withdrawAmount > 0 && withdrawAmount < actualBalance){
        updateTotalfield('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    // const currentWithdraw = document.getElementById('withdraw-total').innerText;
    // const currentWithdrawAmount = parseFloat(currentWithdraw);
    // document.getElementById('withdraw-total').innerText = currentWithdrawAmount + withdrawAmount;
    


    // const currentBalance =  document.getElementById('balance-total').innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);

    // document.getElementById('balance-total').innerText = currentBalanceAmount - withdrawAmount;

    

})