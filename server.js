var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function home (req, res) {
	res.send("Hello world");
});

app.listen(process.env.PORT || 3000);