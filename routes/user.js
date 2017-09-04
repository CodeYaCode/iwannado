// user.js
var express = require('express');
var user = express.Router();

user.get('/login', function(req, res, next) {
	req.session = 'test';
	res.render('index')
});

module.exports = user