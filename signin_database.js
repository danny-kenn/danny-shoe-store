// Retrieve the signup information from localStorage
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || [];

// Function to validate login
function validateLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Check if the username exists in the signUpDatabase
    const existingUser = signUpDatabase.find(user => user.username === usernameInput);
    if (existingUser) {
        // Check if the password matches
        if (existingUser.password === passwordInput) {
            alert("Login successful! Redirecting to homepage...");
            // Redirect to the home page after successful login
            window.location.href = "home.html";
            return false; // Prevent form submission
        } else {
            displayLoginErrorMessage("Incorrect password. Please try again.");
            return false;
        }
    } else {
        displayLoginErrorMessage("Username not found. Please try again.");
        return false;
    }
}

// Function to display login error message
function displayLoginErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
}
