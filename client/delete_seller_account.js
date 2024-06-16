// delete_account.js
document.getElementById('delete-account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('sellerUser'));

    // Check if user exists and credentials match
    if (storedUser && userId === storedUser.userId && password === storedUser.password) {
        // Confirm account deletion
        if (confirm('Are you sure you want to delete your account?')) {
            // Delete account from localStorage
            localStorage.removeItem('sellerUser');

            // Redirect to index.html after deletion
            window.location.href = 'index.html';
        }
    } else {
        alert('Incorrect User ID or Password. Please try again.');
    }
});
