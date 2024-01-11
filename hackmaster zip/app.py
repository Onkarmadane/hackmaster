from flask import Flask, render_template, request
import psycopg2

app = Flask(_name_)

# # Superbase PostgreSQL database connection details
# dbname = 'postgres'
# user = 'postgres'
# password = 'Hackmaster@2023'
# host = 'db.vistnbnhwtvwdpgwxzfz.supabase.co'
# port = '5432'

# # Connect to Superbase PostgreSQL database
# conn = psycopg2.connect(
#     dbname=dbname,
#     user=user,
#     password=password,
#     host=host,
#     port=port
# )

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contactus.html')

@app.route('/about')
def about():
    return render_template('aboutus.html')


# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         if request.method == 'POST':
#             username = request.form['username']
#             email = request.form['email']

#             # Insert user data into Superbase PostgreSQL database
#             cursor = conn.cursor()
#             cursor.execute("INSERT INTO users (username, email) VALUES (%s, %s)", (username, email))
#             conn.commit()
#             cursor.close()

#             return 'Registration successful! Data saved in Superbase.'
#     except Exception as e:
#         return f"An error occurred: {str(e)}"

if _name_ == '_main_':
    app.run(debug=True)