var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoutes');
var usersRouter = require('./routes/usersRoutes');
var messagesRouter = require('./routes/messagesRoutes');
var participationsRouter = require('./routes/participationsRoutes');
var ridesRouter = require('./routes/ridesRoutes');
var stepsRouter = require('./routes/stepsRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// define main routes
app.use('/', indexRouter);
app.use('/messages', messagesRouter);
app.use('/participations', participationsRouter);
app.use('/rides', ridesRouter);
app.use('/steps', stepsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// send error
	res.status(err.status || 500);
	res.json(err);
});

module.exports = app;
