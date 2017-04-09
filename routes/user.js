var ejs = require("ejs");

exports.signup = function(req, res) {
	ejs.renderFile('./views/form.ejs', function(err, result) {
		if (!err) {
			res.end(result);
		}
		else {
			tool.logError(err);
			res.end('An error occurred');
			console.log(err);
		}
	});
}
exports.thankyou = function(req, res) {
	ejs.renderFile('./views/thankyou.ejs', function (err, result) {
		if (!err) {
			res.end(result);
		}
		else {
			tool.logError(err);
			res.end('An error occurred');
			console.log(err);
		}
	});
}

exports.notify = function(req, res) {
	ejs.renderFile('./views/notify.ejs', function (err, result) {
		if (!err) {
			res.end(result);
		}
		else {
			tool.logError(err);
			res.end('An error occurred');
			console.log(err);
		}
	});
}