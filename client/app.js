const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6132',
    database: 'seller_registration',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL Database');
});

// Route to handle registration
app.post('/register', (req, res) => {
    const { firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password } = req.body;

    // Generate user ID
    const userId = `${lastName.slice(0, 3)}${middleName.slice(-2)}${middleName.slice(1, 3)}${new Date().getMonth() + 1}${new Date().getFullYear().toString().slice(-2)}`;

    // Insert user into database
    const sql = 'INSERT INTO users (userId, firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [userId, firstName, middleName, lastName, nationality, nationalId, phoneNumber, location, email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        res.send('User registered successfully');
    });
});

// Route to handle fetching user profile
app.get('/profile/:userId', (req, res) => {
    const userId = req.params.userId;

    const sql = 'SELECT * FROM users WHERE userId = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).send('Error fetching user profile');
        }
        res.json(result[0]);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
