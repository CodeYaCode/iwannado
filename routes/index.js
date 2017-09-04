// index.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// if (req.session === undefined) {
	// 	res.render('login');
	// } else {
		// console.log(req.session);
		// 默认账号ID
		res.render('index')
	// }
});

module.exports = router;