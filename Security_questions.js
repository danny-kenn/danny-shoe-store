// Retrieve the signup information from localStorage
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || [];

// Function to answer security questions
function answerSecurityQuestions() {
    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;

    // Find the user in signUpDatabase
    const user = signUpDatabase.find(user =>
        user.username === usernameInput &&
        user.email === emailInput
    );

    if (user) {
        // Allow user to reset their password
        alert("Security questions answered correctly. You can reset your password now.");
        // Redirect to password reset page or allow inline password reset

        // For demonstration, let's redirect to a reset password page
        window.location.href = `reset_password.html?email=${encodeURIComponent(user.email)}`;
        return false; // Prevent form submission
    } else {
        displayErrorMessage("Incorrect username or email. Please try again.");
        return false;
    }
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
}
