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