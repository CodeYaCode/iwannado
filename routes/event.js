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
	service.add(userId, listId, name, function(err, rows, undefined) {
		if (rows) {
			res.send({id: rows.insertId});	
		}
	});
});

router.post('/del', function(req, res, next) {
	// 默认账号ID
	var userId = 1;
	var eventId = req.body.eventId;
	var service = new eventService();
	service.del(userId, eventId, function(err, rows, undefined) {
		if (rows) {
			res.send({id: rows.insertId});	
		}
	});
});

router.post('/update', function(req, res, next) {
	// 默认账号ID
	var userId = 1;
	var eventId = req.body.eventId;
	var service = new eventService();
	var status = req.body.status;
	service.update(userId, eventId, status, function(err, rows, undefined) {
		if (rows) {
			res.send({id: rows.insertId});	
		}
	});
});

module.exports = router;