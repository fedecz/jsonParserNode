###What is this?

This is a simple http json parser writen in node.js

###How do I run it?

Simply run `npm start` and it will run a server listening by default on port 8080. If you want to override the port number, set an env variable `PORT` to the desired port number before starting the app.

In order to interact with the server you could use curl

	curl -H "Content-type: application/json" --data "@input.json"  localhost:8080 | jq .

This would make a POST request to localhost:8080, sending the provided file input.json as input data. The output  is then processed by [jq](http://stedolan.github.io/jq/) to colour it up a little and give it some format. This is optional, ofcourse.

###How do I run the tests?

You would need mocha installed first. To install it run `npm install -g mocha` (perhaps you'd need to add sudo depending on your OS). Then run `npm test` to run the tests.


###Author

Federico Czerwinski