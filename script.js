// script.js

document.getElementById('calculate').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const monthsToPay = parseInt(document.getElementById('monthsToPay').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay)) {
        alert("Please fill in all fields.");
        return;
    }

    const x = Math.pow(1 + interestRate, monthsToPay);
    const monthlyPayment = (loanAmount * interestRate * x) / (x - 1);

    document.getElementById('monthlyPayment').innerText = `Monthly Payment: Rs${monthlyPayment.toFixed(2)}`;
});
