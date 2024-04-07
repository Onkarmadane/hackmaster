const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'db.vistnbnhwtvwdpgwxzfz.supabase.co',
  database: 'postgres',
  password: 'Hackmaster@2023',
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/contactus.html');
});

app.post('/submit', async (req, res) => {
  try {
    const { username, email } = req.body;

    // Insert user data into PostgreSQL database
    await pool.query('INSERT INTO users (username, email) VALUES ($1, $2)', [username, email]);

    res.send('Registration successful! Data saved in PostgreSQL.');
  } catch (error) {
    res.status(500).send(`An error occurred: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
