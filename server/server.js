var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var port = process.env.PORT || 8080;

var parseCoords = require('../utils/utils.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/', function(req, res) {
  // console.log('#######', req.body);
  parseCoords(req.body);
  res.status(200);
  res.end();
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})