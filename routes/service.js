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


function notifyUser(req,res) {
	var cmd = "curl --header \"Authorization: key=AAAAnQ-2xSs:APA91bGDrosr5MNraL5D_0SSwtXN2F1zJEkC9715xzfXJLvjCehjREI9QEr6U-cTnftD3a-tRlKtd__X1goC78100BL4Qw1NcPTWAWlWXDb-J7rg8BNxyv3mOYSDZztYjPKrkhEw_B0n\" --header Content-Type:\"application/json\" https://android.googleapis.com/gcm/send -d \"{\\\"registration_ids\\\":[\\\"eBher932TvA:APA91bGRkC3R84uXI5wyGH7J5YiZl40Sk9yPRtQ2J1nijE5GYwlsyS2nsSUf1OXnCKp9F9a9chOriXrVspvPAvXAvMN6RScfUs9Fab1SirSTytMR3bEIQuinF6vkGXte_WGzqO_r0CHY\\\"]}\"";
	
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