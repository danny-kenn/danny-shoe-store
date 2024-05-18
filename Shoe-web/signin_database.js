// Define predefined credentials
const credentials = {
    "admin": "admin123",
    "user": "password123"
};

// Function to validate login and redirect to homepage
function validateLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Check if the username exists in the credentials object
    if (credentials.hasOwnProperty(usernameInput)) {
        // Check if the password matches
        if (credentials[usernameInput] === passwordInput) {
            // If credentials are correct, allow access
            alert("Login successful! Redirecting to homepage...");
        } else {
            alert("Incorrect password. Redirecting to homepage...");
        }
    } else {
        alert("Username not found. Redirecting to homepage...");
    }

    // Redirect the user to the homepage regardless of login status
    window.location.href = "home.html";
    return false; // Prevent form submission
}

// Function to display error message (if needed)
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
}
