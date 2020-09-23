const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Providing Express app with JS, CSS & images
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
  response.render('index');
});

app.get('/details', (request, response) => {
  response.render('details');
});

app.post('/submit-form', (request, response) => {
  console.log(request.body);
  response.redirect('/');
});

// catch 404 and forward to error handler
app.use((request, response, next) => {
  next(createError(404));
});

// error handler
app.use((err, request, response, next) => {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render('error');
});

module.exports = app;
