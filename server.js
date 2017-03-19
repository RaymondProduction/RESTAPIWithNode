var express = require('express');
var mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function() {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));


require('./models/musician');
var router = require('./routes');
router(app);

app.listen(3001);
console.log('Listening on port 3001...');
