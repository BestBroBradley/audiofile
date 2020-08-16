const express = require('express');
const port = 3001;


const app = express();

// const cors = require('cors');
// add this later when it is hosted somewhere else
// const corsOptions = {
  // origin: 'http://example.com',
  // optionsSuccessStatus: 200
// }

// Environment variables
const dotenv = require('dotenv');
dotenv.config();
// console.log(process.env.PGUSER);
// console.log(process.env.PGPASSWORD);
// console.log(process.env.PGHOST);
// console.log(process.env.PGDATABASE);

// PG stuff move later
const { Client } = require('pg');
const { response } = require('express');
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
  // console.log("Attempting to make query");
  client.query(query, (err, res) => {
    // console.log("in the query");
    if (err) {
      console.log(err.stack)
    } else {
      // console.log("in the else")
      // console.log(res.rows);
      // for (user of res.rows) {
      //   console.log(user);
      // }
      response.json(res.rows);
    }
  })
})


// Entire library
app.get('/users/:username/library', function(req, response) {
  // res.send(req.params.username); this will send back kesha
  const query = {
    name: 'fetch-username-library',
    // HERE
    text: 'SELECT title, artist, genre, tracks, date, condition, comments, rating, albumlength, composer, rarity, price from audiofile.users u inner join audiofile."library" l on u.username = l.username where u.username = ?',
  }
  console.log("Attempting to make a query");
  client.query(query, [req.params.username], (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      response.json(res.rows);
    }
  })
})


// Set the port to list on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})