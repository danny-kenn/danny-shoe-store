// Retrieve the signup information from localStorage
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || [];

// Function to delete user account
function deleteAccount() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Find the user in signUpDatabase
    const userIndex = signUpDatabase.findIndex(user => user.username === usernameInput);

    if (userIndex !== -1 && signUpDatabase[userIndex].password === passwordInput) {
        // Remove the user from signUpDatabase
        signUpDatabase.splice(userIndex, 1);

        // Update localStorage for signUpDatabase
        localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase));

        alert("Account deleted successfully!");
        // Redirect to the login page or another appropriate page
        window.location.href = "Index.html";
        return false; // Prevent form submission
    } else {
        displayErrorMessage("Username or password incorrect. Account deletion failed.");
        return false;
    }
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
}
