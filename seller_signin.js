document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('sellerUser'));

    // Check if user exists and credentials match
    if (userData && userId === userData.userId && password === userData.password) {
        // Redirect to seller homepage
        window.location.href = 'seller-homepage.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});