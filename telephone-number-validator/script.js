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

userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        validateNumber(userInput.value);
    }
    return;
});

clearBtn.addEventListener("click", () => resultsDiv.innerHTML = "");

const validateNumber = (number) => {
    const regex = /^(?:1\s?)?\(?5{3}\)?[ -]?5{3}[ -]?5{4}$/;
    if (regex.test(number)) {
        const validMessage = `Valid US number: ${number}`;
        const validParagraph = resultsDiv.appendChild(document.createElement("p"));
        validParagraph.classList.add("valid-paragraph");
        validParagraph.textContent = validMessage;
        return userInput.value = "";
    } else {
        const invalidMessage = `Invalid US number: ${number}`;
        const invalidParagraph = resultsDiv.appendChild(document.createElement("p"));
        invalidParagraph.classList.add("invalid-paragraph");
        invalidParagraph.textContent = invalidMessage;
        return userInput.value = "";
    }
}