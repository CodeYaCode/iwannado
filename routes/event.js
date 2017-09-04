// event.js
var express = require('express');
var router = express.Router();
var eventService = require('../src/service/eventService');

router.post('/get', function(req, res, next) {
	// if (req.session === undefined) {
	// 	res.render('login');
	// } else {
		// console.log(req.session);
		// 默认账号ID
		var userId = 1;
		var listId = req.body.listId;
		if (userId && listId) {
			var service = new eventService();
			service.query(userId, listId, function(err, rows, undefined) {
				res.send(rows);
			});
		}
	// }
});

router.post('/add', function(req, res, next) {
	// 默认账号ID
	var userId = 1;
	var listId = req.body.listId;
	var name = req.body.name;
	var service = new eventService();
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
	var service = new eventService();
	service.del(userId, id, function(err, rows, undefined) {
		// to do something
	});
});

module.exports = router;