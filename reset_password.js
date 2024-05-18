function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value;

    const user = signUpDatabase.find(user => user.email === email);
    if (user) {
        user.password = newPassword;
        document.getElementById('message').textContent = "Password has been reset successfully.";
    } else {
        document.getElementById('errorMessage').textContent = "Error resetting password.";
    }
    return false;
}
