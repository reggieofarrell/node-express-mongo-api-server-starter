// main starting point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); // used to parse requests
const morgan = require('morgan'); // logging framework
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth');

//App setup
app.use(morgan('combined'));
app.use(cors()); // middleware to enable cors requests
app.use(bodyParser.json({ type: '*/*' }));  // parse all requests as json
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
