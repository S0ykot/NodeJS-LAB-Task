var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){

	if(request.url == "/"){
		var data = fs.readFileSync('root.html');
		response.write(data.toString());
		response.end();
	}else if(request.url == '/login'){

		var data = fs.readFileSync('login.html');
		response.write(data.toString());
		response.end();

	}
	else if (request.url == '/signup') {
		var data = fs.readFileSync('signup.html');
		response.write(data.toString());
		response.end();

	}
	else{
		response.write("Don't play with me");
		response.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(1337);
console.log('server started at port 1337');