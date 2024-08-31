import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signed up successfully!");
        window.location.href = "home.html"; // Redirect to home page
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
