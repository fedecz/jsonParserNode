var express = require('express');
var showParser = require('./showParser.js');
var errorHandler = require('./errorHandler.js');
var responseRenderer = require('./responseRenderer.js');
var app = express();
app.use(express.json());
app.use(errorHandler.handleError);

app.post('/', function(req, res) {
	var payload = req.body.payload;
    res.json(responseRenderer.render(showParser.getShows(payload)));
});


var port = Number(process.env.PORT || 8080);
app.listen(port);
console.log('Listening on port ' + port);
