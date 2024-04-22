const currPass = document.getElementById('password');
const checkPass = document.getElementById('confirm-password');
const message = document.getElementById('error-message'); 

function confirmPassword(){
    if (currPass.value !== checkPass.value) {
        checkPass.classList.add('invalid-pass');
        message.innerText = "*passwords do not match";
    }
    else {
        checkPass.classList.remove('invalid-pass');
        checkPass.classList.add('valid-pass');
        message.innerText = "";
    }
    
}

const passwordChecks = document.querySelector('.password-format');

function checkPassword(){
    passwordChecks.classList.add('opacityON');

    if (/[A-Z]/.test(currPass.value)) document.getElementById('password-format-upper').classList.add('greenText');
    else document.getElementById('password-format-upper').classList.remove('greenText');

    if (/[a-z]/.test(currPass.value)) document.getElementById('password-format-lower').classList.add('greenText');
    else document.getElementById('password-format-lower').classList.remove('greenText');

    if (/[0-9]/.test(currPass.value)) document.getElementById('password-format-num').classList.add('greenText');
    else document.getElementById('password-format-num').classList.remove('greenText')
}
