let balance = 1000;
const historyList = document.getElementById("history-list");

function updateBalance() {
    document.getElementById("balance").textContent = `$${balance}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount");
        return;
    }
    balance += amount;
    updateBalance();
    recordTransaction(`+${amount}`);
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount");
        return;
    }
    if (balance < amount) {
        alert("Insufficient funds");
        return;
    }
    balance -= amount;
    updateBalance();
    recordTransaction(`-${amount}`);
}

function recordTransaction(transaction) {
    const listItem = document.createElement("li");
    listItem.textContent = transaction;
    historyList.appendChild(listItem);
}

updateBalance();
