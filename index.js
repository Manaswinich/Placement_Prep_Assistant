const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb+srv://Manaswini:manu123@cluster0-qabxb.mongodb.net/strategy_db?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(3000, function () {
    console.log('now listening for requests');
});