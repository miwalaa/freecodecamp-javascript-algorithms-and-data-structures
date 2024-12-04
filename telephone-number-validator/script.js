const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return false;
    }
    validateNumber(userInput.value)
})

clearBtn.addEventListener("click", () => resultsDiv.innerHTML = "");

const validateNumber = (number) => {
    const regex = /(?:(1)[ ]?)?\(?(5{3})\)?[ -]?(5{3})[ -]?(5{4})/;
    if (regex.test(number)) {
        return userInput.value = "";
    }
}
