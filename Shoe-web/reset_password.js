// Retrieve the signup information from localStorage
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || [];

// Function to reset password
function resetPassword() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const newPassword = document.getElementById("newPassword").value;

    // Find the user in signUpDatabase
    const userIndex = signUpDatabase.findIndex(user => user.email === email);

    if (userIndex !== -1) {
        // Update the user's password
        signUpDatabase[userIndex].password = newPassword;

        // Update localStorage for signUpDatabase
        localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase));

        alert("Password reset successful! Please login with your new password.");
        // Redirect to the login page or another appropriate page
        window.location.href = "login_webpage.html";
        return false; // Prevent form submission
    } else {
        displayErrorMessage("User not found. Please try again.");
        return false;
    }
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
}
