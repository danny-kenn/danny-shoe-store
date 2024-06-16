function verifyCode() {
    const enteredCode = document.getElementById('code').value;
    if (enteredCode === verificationCode) {
        window.location.href = "reset_password.html";
    } else {
        document.getElementById('errorMessage').textContent = "Incorrect verification code.";
    }
    return false;
}
