// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const movies = require('./routes/api/movies');
 
const app = express();

// Connect Database
connectDB();
 
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/movies', movies);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));