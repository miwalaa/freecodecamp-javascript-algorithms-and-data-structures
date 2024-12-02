const palindromeInput = document.getElementById('palindrome-input');
const checkButton = document.getElementById('check-button');
const resultDiv = document.querySelector('.result-div');

const isPalindrome = str => {
    const originalStr = str;

    if (str === '') {
        alert('Please input a value');
        return;
    }

    // Remove the previous result 
    resultDiv.replaceChildren();

    const lowerCaseStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalStr}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);
    resultDiv.classList.remove('hidden');
}

checkButton.addEventListener('click', () => {
    isPalindrome(palindromeInput.value);
    palindromeInput.value = '';
})

palindromeInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        isPalindrome(palindromeInput.value);
        palindromeInput.value = '';
    }
})