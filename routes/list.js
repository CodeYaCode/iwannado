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
	console.log('add it [' + req.params + ']');
	var name = req.params.name;
	var userId = 1;
	var service = new listService();
	service.add(userId, name, function(err, rows, undefined) {
		// to do something
		if (rows) {
			res.send({id: rows.insertId});	
		}
	});
});

router.post('/del/:id', function(req, res, next) {
	console.log('del it [' + req.params + ']');
	var id = req.params.id;
	var userId = 1;
	var service = new listService();
	service.del(userId, id, function(err, rows, undefined) {
		// to do something
	});
});

module.exports = router;