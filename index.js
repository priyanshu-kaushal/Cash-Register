const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button-check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


checkButton.addEventListener("click", function validateAmount() {
    hidemessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
             const cashToBeReturned = cashGiven.value - billAmount.value;
             calculateChange(cashToBeReturned);
        } else {
            showMessage("The cash provided should be at least equal to Bill Amoun");
        }
    } else {
        showMessage("Bill Amount should be greater than '0'");
    }
});

function calculateChange(cashToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(
            cashToBeReturned / availableNotes[i]
        );
        cashToBeReturned = cashToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hidemessage() {
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}