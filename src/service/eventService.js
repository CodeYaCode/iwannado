// eventService.js
var eventDao = require('../dao/eventDao')

function eventService() {
	this.eventDao = new eventDao();
	
	// query event info by userId
	this.query = function(userId, listId, cb) {
		var params = [];
		params.push(userId);
		params.push(listId);
		this.eventDao.query(params, cb);
	}

	// add event info by userId
	this.add = function(userId, listId, name, cb) {
		var params = [];
		params.push(userId);
		params.push(listId);
		params.push(name);
		params.push(new Date());
		this.eventDao.add(params, cb);
	}

	// del event info by userId
	this.del = function(userId, eventId, cb) {
		var params = [];
		params.push(userId);
		params.push(eventId);
		this.eventDao.del(params, cb);
	}

	// update event status by userId
	this.update = function(userId, eventId, eventName, status, cb) {
		var params = [];
		params.push(eventName);
		params.push(status);
		params.push(userId);
		params.push(eventId);
		this.eventDao.update(params, cb);
	}
}

module.exports = eventService;