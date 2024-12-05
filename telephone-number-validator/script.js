const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validateNumber = (number) => {
    if (number === "") {
        alert("Please provide a phone number");
        return;
    }

    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const spacesDashes = "[\\s\\-]?";
    const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement("p");
    pTag.className = "results-text";
    phoneRegex.test(number)
        ? (pTag.style.color = "#00471b")
        : (pTag.style.color = "#4d3800");
    pTag.appendChild(
        document.createTextNode(
            `${phoneRegex.test(number) ? 'Valid' : 'Invalid'} US number: ${number}`
        )
    );
    resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
    validateNumber(userInput.value)
    userInput.value = "";
});

userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        validateNumber(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => resultsDiv.textContent = "");