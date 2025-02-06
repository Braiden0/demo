// script.js
document.getElementById('hours').addEventListener('input', updateTotal);
document.getElementById('payButton').addEventListener('click', processPayment);

function updateTotal() {
    const hours = document.getElementById('hours').value;
    const rate = document.getElementById('rate').value;
    const totalAmount = hours * rate;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function processPayment() {
    const hours = document.getElementById('hours').value;
    const totalAmount = document.getElementById('totalAmount').textContent;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (hours < 1) {
        alert("Please enter a valid parking duration.");
        return;
    }

    let message = `You have chosen ${hours} hour(s) of parking. Total: $${totalAmount}.`;

    // Simulating payment processing
    if (paymentMethod === 'credit') {
        message += " Processing your Credit Card payment...";
    } else if (paymentMethod === 'M-PESA') {
        message += " Redirecting to M-PESA...";
    }

    // Display a confirmation message
    document.getElementById('paymentMessage').textContent = message;

    // Reset the form after processing
    document.getElementById('paymentForm').reset();
    updateTotal();
}
