from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'your_secret_key'
import mysql.connector

mydb =mysql.connector.connect(
    host="localhost",
    user="root",
    password ="6132",
    database="comrade_shoe_seller"
)

print(mydb)

mycursor= mydb.cursor()
mycursor.execute("SHOW DATABASES")

for db in mycursor:
    print(db)

mycursor.execute("SHOW TABLES")

for tb in mycursor:
    print(tb)

cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

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

        if password != confirm_password:
            flash('Passwords do not match!', 'error')
            return redirect(url_for('register'))

        # Generate user_id
        user_id = generate_user_id(last_name, middle_name)

        # Insert into database
        try:
            sql = """INSERT INTO users (first_name, middle_name, last_name, nationality, national_id, phone_number, location, email, password)
                     VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
            values = (first_name, middle_name, last_name, nationality, national_id, phone_number, location, email, password)
            cursor.execute(sql, values)
            db.commit()
            flash('Registration successful!', 'success')
            return redirect(url_for('login'))
        except mysql.connector.Error as err:
            flash(f'Error: {err}', 'error')
            return redirect(url_for('register'))
        finally:
            cursor.close()

    return render_template('register.html')

def generate_user_id(last_name, middle_name):
    # Implement your user_id generation logic here
    # Example: user_id = last_name[:3] + middle_name[-2:] + ...

if __name__ == '__main__':
    app.run(debug=True)