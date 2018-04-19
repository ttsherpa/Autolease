var createError = require('http-errors');
const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const cors = require('cors');
const port = process.env.PORT || 3000; 

//New Code MiddleWare------------------------------------

var debug = require('debug')('node-postgres-promises:server');
var http = require('http');

app.use(cors({origin: 'http://localhost:4200'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Old Code-----------------------------------------------

//Connect Server to ReactJS Index.html

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log("Server is up!");
});