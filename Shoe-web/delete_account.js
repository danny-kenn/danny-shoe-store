// Get the modal
var modal = document.getElementById("deleteModal");

// Get the button that opens the modal
var btn = document.getElementById("deleteAccountBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the delete button inside the modal
var deleteBtn = document.getElementById("confirmDeleteBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the delete button inside the modal, delete the account
deleteBtn.onclick = function() {
    // Simulated user ID (you can replace this with your actual user ID logic)
    var userId = 1;

    // Simulated users data in localStorage (you can replace this with your actual user data storage)
    var users = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" }
    ];

    // Find user index
    var userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        alert("User not found");
        return;
    }

    // Remove user from array
    users.splice(userIndex, 1);

    // Save updated users back to localStorage (you can replace this with your actual saving logic)
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert("Account deleted successfully");

    // Close the modal after deletion
    modal.style.display = "none";

    // Redirect to signup page (replace with your actual signup page URL)
    window.location.href = "index.html";
}
