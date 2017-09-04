// listDao.js
var query = require('../db/connector')
var sql = require('../db/sql')['LIST']

function listDao() {
	// query list by userId
	this.query = function(params, cb) {
		query(sql['query'], params, cb);
	}
	// add list
	this.add = function(params, cb) {
		query(sql['add'], params, cb);
	}
	// del list
	this.del = function(params, cb) {
		query(sql['del'], params, cb);
	}
}

// listDao = new listDao();
// var userId = 1;
// listDao.query(userId, function(err, rows, field) {
// 	console.log(rows);
// });

module.exports = listDao;