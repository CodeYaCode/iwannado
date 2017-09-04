// listService.js
var listDao = require('../dao/listDao')

function listService() {
	this.listDao = new listDao();
	
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
	this.del = function(params, cb) {
		this.listDao.del(params, cb);
	}
}

module.exports = listService;