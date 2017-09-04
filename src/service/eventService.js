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
	this.del = function(params, cb) {
		this.eventDao.del(params, cb);
	}
}

module.exports = eventService;