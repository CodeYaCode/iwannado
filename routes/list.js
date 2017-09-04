// list.js

var express = require('express');
var router = express.Router();
var listService = require('../src/service/listService');

router.post('/get', function(req, res, next) {
	// if (req.session === undefined) {
	// 	res.render('login');
	// } else {
		// console.log(req.session);
	// 默认账号ID
	var userId = 1;
	var params = [];
	params.push(userId);
	var service = new listService();
	service.query(params, function(err, rows, undefined) {
		res.send(rows);
	});
	// }
});

router.post('/add', function(req, res, next) {
	// 默认账号ID
	var userId = 1;
	var name = req.body.name;
	var userId = 1;
	var service = new listService();
	service.add(userId, name, function(err, rows, undefined) {
		// to do something
		if (rows) {
			res.send({id: rows.insertId});	
		}
	});
});

router.post('/del', function(req, res, next) {
	// 默认账号ID
	var userId = 1;
	var id = req.body.id;
	var service = new listService();
	service.del(userId, id, function(err, rows, undefined) {
		if (rows) {
			res.send();
		}
	});
});

module.exports = router;