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

// Displays the homepage
app.get('/', (request, response, next) => {
  response.render('index');
});

// Displays the user's details on the details page
app.get('/details', (request, response) => {
  const { title, forename, surname, dob, telephone, email } = request.query;
  response.render('details', { title, forename, surname, dob, telephone, email });
});

// Retrieves the form data and shows the details page
app.post('/submit-form', (request, response) => {
  const { title, forename, surname, dob, telephone, email } = request.body;
  response.redirect(`/details?title=${title}&forename=${forename}&surname=${surname}&dob=${dob}&telephone=${telephone}&email=${email}`);
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
