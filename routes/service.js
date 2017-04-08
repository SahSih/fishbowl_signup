var mongo = require("./mongo");
var mongoURL = "mongodb://jpranjal1304:password123@ds155490.mlab.com:55490/subscribers";

function subscribe(req,res)
{
	var name = req.param("name");
	var age = req.param("age");

	var json_responses;
	
	var post  = {name: name, age : age};
	mongo.connect(mongoURL, function(){
		console.log('Connected too mongo at: ' + mongoURL );
		var coll = mongo.collection('users');
		coll.insert(post, function(err, user){
			console.log("user3-- "+user.insertedIds);
			if(err){
					json_responses = {"statusCode" : 402};
					res.send(json_responses);
			}
			else
			{
				json_responses = {"statusCode" : 200};
				res.send(json_responses);
			}
		});
	});       
	
}

exports.subscribe = subscribe;