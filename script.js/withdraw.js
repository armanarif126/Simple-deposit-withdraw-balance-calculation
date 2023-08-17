document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdraw= document.getElementById('withdraw-amount');
    const newwithdrawString= newWithdraw.value;
    const newWithdrawAmount= parseFloat(newwithdrawString);
    newWithdraw.value='';
    const totalWithdraw=document.getElementById('total-withdraw-amount');
const totalWithdrawString=totalWithdraw.innerText;
const totalWithdrawAmount= parseFloat(totalWithdrawString);
const newWithdrawtotal= totalWithdrawAmount+newWithdrawAmount;
totalWithdraw.innerText=newWithdrawtotal;

const balanceTotalElement= document.getElementById('Balance-amount');
const balanceTotalElementString= balanceTotalElement.innerText;
const balanceTotalAmount=parseFloat(balanceTotalElementString);
const newbalanceTotalAmount= balanceTotalAmount-newWithdrawAmount;
balanceTotalElement.innerText=newbalanceTotalAmount;
});