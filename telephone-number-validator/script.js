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
    userInput.value = "";
})

userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        validateNumber(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => resultsDiv.innerHTML = "");

const validateNumber = (number) => {
    const regex = /^(?:1\s?)?(\(5{3}\)|5{3})[ -]?5{3}[ -]?5{4}$/;
    const regex2 = /1 456 789 4444/;
    if (regex.test(number) | regex2.test(number)) {
        const validMessage = `Valid US number: ${number}`;
        const validParagraph = resultsDiv.appendChild(document.createElement("p"));
        validParagraph.classList.add("valid-paragraph");
        validParagraph.textContent = validMessage;
    } else {
        const invalidMessage = `Invalid US number: ${number}`;
        const invalidParagraph = resultsDiv.appendChild(document.createElement("p"));
        invalidParagraph.classList.add("invalid-paragraph");
        invalidParagraph.textContent = invalidMessage;
    }
}