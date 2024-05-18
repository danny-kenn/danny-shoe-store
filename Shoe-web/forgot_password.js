let verificationCode = null;

function sendResetCode() {
    const email = document.getElementById('email').value;
    const user = signUpDatabase.find(user => user.email === email);

    if (!user) {
        document.getElementById('errorMessage').textContent = "Email not found.";
        return false;
    }

    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Verification code sent to ${email}: ${verificationCode}`);
    alert(`Verification code sent to ${email}: ${verificationCode}`);

    window.location.href = "verify_code.html";
    return false;
}
