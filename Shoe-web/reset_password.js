// Add this script tag to your HTML <head> or before the closing </body> tag
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS user ID

function sendVerificationCode(email, code) {
    emailjs.send("service_d1bbbopl", "template_su0whmn", {
        to_email: email,
        verification_code: code
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}

function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
}

function requestVerificationCode() {
    const email = document.getElementById('email').value;
    const user = signUpDatabase.find(user => user.email === email);

    if (user) {
        const verificationCode = generateVerificationCode();
        localStorage.setItem('verificationCode', verificationCode);
        localStorage.setItem('verificationEmail', email);
        sendVerificationCode(email, verificationCode);
        document.getElementById('message').textContent = "Verification code sent to your email.";
    } else {
        document.getElementById('errorMessage').textContent = "Email not found.";
    }
    return false;
}

function verifyCode() {
    const code = document.getElementById('verificationCode').value;
    const storedCode = localStorage.getItem('verificationCode');
    const storedEmail = localStorage.getItem('verificationEmail');

    if (code === storedCode) {
        const newPassword = document.getElementById('newPassword').value;
        const user = signUpDatabase.find(user => user.email === storedEmail);
        if (user) {
            user.password = newPassword;
            document.getElementById('message').textContent = "Password has been reset successfully.";
        } else {
            document.getElementById('errorMessage').textContent = "Error resetting password.";
        }
    } else {
        document.getElementById('errorMessage').textContent = "Invalid verification code.";
    }
    return false;
}
