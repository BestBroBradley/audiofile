const express = require('express');
const app = express();
const port = 3001;

// Environment variables
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PGUSER);
console.log(process.env.PGPASSWORD);
console.log(process.env.PGHOST);
console.log(process.env.PGDATABASE);

// PG stuff move later
const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', function(req, response) {
  const query = {
    name: 'fetch-user',
    text: 'SELECT * FROM audiofile.users'
  }
  console.log("Attempting to make query");
  client.query(query, (err, res) => {
    console.log("in the query");
    if (err) {
      console.log(err.stack)
    } else {
      console.log("in the else")
      console.log(res.rows);
      for (user of res.rows) {
        console.log(user);
      }
      response.json(res.rows);
    }
  })
})


// Set the port to list on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})