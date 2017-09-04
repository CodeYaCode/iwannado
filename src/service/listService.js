// listService.js
var listDao = require('../dao/listDao');
var eventDao = require('../dao/eventDao');

function listService() {
	this.listDao = new listDao();

	this.eventDao = new eventDao();
	
	// query list info by userId
	this.query = function(userId, cb) {
		var params = [];
		params.push(userId);
		this.listDao.query(params, cb);
	}

	// add list info by userId
	this.add = function(userId, name, cb) {
		var params = [];
		params.push(userId);
		params.push(name);
		params.push(new Date());
		this.listDao.add(params, cb);
	}

	// del list info by userId
	this.del = function(userId, listId, cb) {
		var params = [];
		params.push(userId);
		params.push(listId);
		this.listDao.del(params, cb);
		this.eventDao.delAllList(params, undefined);
	}
}

module.exports = listService;