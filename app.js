var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const handleErrors = require('./middleware/handleErrors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.use(handleErrors);

mongoose.connect('mongodb+srv://tolgahan:DBwuBDMzvQ6FnY2d@cluster0.o8gvf.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=> {
        console.log('connected to mongodb');
        app.listen(4000);
    })
    .catch(err => {console.log(err)});

module.exports = app;
