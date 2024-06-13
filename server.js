const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
require('dotenv').config(); // Load environment variables

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// MySQL database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        throw err;
    }
    console.log('Connected to MySQL Database.');
});

// Generate User ID function
function generateUserId(firstName, middleName, lastName) {
    const userYear = new Date().getFullYear().toString().slice(-2);
    return `${lastName.substring(0, 3)}${firstName.slice(-2)}${middleName.slice(1, 3)}${userYear}`;
}

// Registration route
app.post('/api/register', (req, res) => {
    const { firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password } = req.body;
    const userId = generateUserId(firstName, middleName, lastName);

    const query = 'INSERT INTO sellers (userId, firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [userId, firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
        res.json({ success: true, message: 'Registration successful!', userId });
    });
});

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
