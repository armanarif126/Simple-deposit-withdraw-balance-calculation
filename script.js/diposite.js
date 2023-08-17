document.getElementById('diposite-btn').addEventListener('click', function(){
    const newDeposite= document.getElementById('diposite-amount');
    const newDepositeString= newDeposite.value;
    const newDepositeAmount= parseFloat(newDepositeString);
    newDeposite.value='';
    const totalDeposite=document.getElementById('total-deposite-amount');
const totalDepositeString=totalDeposite.innerText;
const totalDepositeAmount= parseFloat(totalDepositeString);
const newdepositetotal= totalDepositeAmount+newDepositeAmount;
totalDeposite.innerText=newdepositetotal;

const balanceTotalElement= document.getElementById('Balance-amount');
const balanceTotalElementString= balanceTotalElement.innerText;
const balanceTotalAmount=parseFloat(balanceTotalElementString);
const newbalanceTotalAmount= balanceTotalAmount+newDepositeAmount;
balanceTotalElement.innerText=newbalanceTotalAmount;
});


