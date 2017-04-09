
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , service = require('./routes/service')
  , http = require('http')
  , path = require('path');

var mongoURL = "mongodb://jpranjal1304:password123@ds155490.mlab.com:55490/subscribers";
var mongo = require("./routes/mongo");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signup', user.signup);
app.post('/subscribe', service.subscribe);
app.get('/thankyou', user.thankyou);
app.get('/notify', user.notify);
app.post('/notifyUser', service.notifyUser);
app.get('/getUsers', service.getUsers);

mongo.connect(mongoURL, function(){
	console.log('Connected to mongo at: ' + mongoURL);
	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});  
});
