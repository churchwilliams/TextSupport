var express = require('express');
var app = express();
var port = 9001;

app.use(express.static(_dirname + '/public'));
