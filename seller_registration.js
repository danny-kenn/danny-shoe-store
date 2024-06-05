document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const nationality = document.getElementById('nationality').value;
    const nationalId = document.getElementById('nationalId').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const location = document.getElementById('location').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Generate user ID
    const userYear = new Date().getFullYear().toString().slice(-2);
    const userId = `${lastName.substring(0, 3)}${firstName.slice(-2)}${middleName.slice(1, 3)}${userYear}`;

    // Create user object
    const user = {
        firstName,
        middleName,
        lastName,
        nationality,
        nationalId,
        phoneNumber,
        location,
        userId,
        password
    };

    // Store user data in local storage
    localStorage.setItem('sellerUser', JSON.stringify(user));

    // Redirect to seller homepage
    window.location.href = 'seller_homepage.html';
});