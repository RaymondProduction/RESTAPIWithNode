var express = require('express');
var app = express();
var router = require('./routes');
router(app);
app.listen(3001);
console.log('Listening on port 3001...');
