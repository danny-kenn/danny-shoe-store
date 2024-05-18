// Define an array to store signup information or retrieve it from localStorage
let signUpDatabase = JSON.parse(localStorage.getItem('signUpDatabase')) || [];

// Function to add a new signup entry
function signUp(username, email, password) {
    // Check if the email already exists
    const existingUser = signUpDatabase.find(user => user.email === email);
    if (existingUser) {
        alert("User with this email already exists.");
        return false;
    }

    // Create a new signup entry
    const newEntry = {
        username: username,
        email: email,
        password: password
    };

    // Add the new entry to the database
    signUpDatabase.push(newEntry);
    // Store the updated database in localStorage
    localStorage.setItem('signUpDatabase', JSON.stringify(signUpDatabase));
    alert("Signed up successfully!");
    // Redirect to the home page after successful signup
    window.location.href = "home.html";
    return false; // Prevent form submission
}

// Function to handle form submission
function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    return signUp(username, email, password); // Call signUp function with form data
}
