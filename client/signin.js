import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in successfully!");
        window.location.href = "home.html"; // Redirect to home page
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
