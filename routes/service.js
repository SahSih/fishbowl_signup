var mongo = require("./mongo");
var mongoURL = "mongodb://jpranjal1304:password123@ds155490.mlab.com:55490/subscribers";
var child_process = require('child_process');
var curl = require('curlrequest');

function subscribe(req,res)
{
	var exampleInputFirstName = req.param("exampleInputFirstName");
	var firstName = req.param("firstName");
	var lastName = req.param("lastName");
	var email = req.param("email");
	var age = req.param("age");
	var gender = req.param("gender");
	var cuisine = req.param("cuisine");
	console.log(exampleInputFirstName);
	var json_responses;
	
	var post  = {firstName: firstName, lastName : lastName, email:email,age:age,gender:gender,cuisine:cuisine,curl:req.param("curl")};
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

function getUsers(req,res)
{

	var json_responses;

	mongo.connect(mongoURL, function(){
		console.log('Connected too mongo at: ' + mongoURL );
		var coll = mongo.collection('users');
		coll.find({"curl":{"$ne": ""}}).toArray(function(err, users){
			if(err){
				json_responses = {"statusCode" : 401};
				res.send(json_responses);
			}
			else
			{
				json_responses = {"statusCode" : 200, "data": users};
				res.send(json_responses);
			}
		});
	});

}


function notifyUser(req,res) {
	var cmd = req.param("curl");
	
	var result = runCmd(cmd);
}

function runCmd(cmd)
{
	var resp = child_process.execSync(cmd);
	var result = resp.toString('UTF8');
	return result;
}
exports.subscribe = subscribe;
exports.notifyUser = notifyUser;
exports.getUsers=getUsers;