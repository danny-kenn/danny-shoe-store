from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = '6132'

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '6132',
    'database': 'comrade_shoe_seller'
}

# Route for the registration page
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        first_name = request.form['first_name']
        middle_name = request.form['middle_name']
        last_name = request.form['last_name']
        nationality = request.form['nationality']
        national_id = request.form['national_id']
        phone_number = request.form['phone_number']
        location = request.form['location']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Password validation
        if password != confirm_password:
            flash('Passwords do not match. Please try again.')
            return redirect(url_for('register'))

        # User ID generation
        user_id = generate_user_id(first_name, middle_name, last_name)

        try:
            # Connect to the database
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()

            # Insert user data into the database
            cursor.execute("""
                INSERT INTO users (user_id, first_name, middle_name, last_name, nationality, national_id, phone_number, location, email, password)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, (user_id, first_name, middle_name, last_name, nationality, national_id, phone_number, location, email, password))

            conn.commit()
            cursor.close()
            conn.close()

            flash('Registration successful!')
            return redirect(url_for('register'))
        except mysql.connector.Error as err:
            flash(f'Error: {err}')
            return redirect(url_for('register'))

    return render_template('register.html')

def generate_user_id(first_name, middle_name, last_name):
    # Example logic to generate user ID
    return (last_name[:3] + middle_name[-2:] + middle_name[1:3] + datetime.now().strftime("%m%y")).upper()

if __name__ == '__main__':
    app.run(debug=True)