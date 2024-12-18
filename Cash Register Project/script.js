const cashInput = document.getElementById("cash");
const numberInput = document.getElementById("number");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

console.log(cid.slice(0));

function checkCashRegister(price, cash, cid) {
    
}

purchaseBtn.addEventListener("click", checkCashRegister);

numberInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkCashRegister();
    }
});