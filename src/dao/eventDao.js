// eventDao.js
var query = require('../db/connector')
var sql = require('../db/sql')['EVENT']

function eventDao() {
	// query event by userId
	this.query = function(params, cb) {
		query(sql['query'], params, cb);
	}
	// add event
	this.add = function(params, cb) {
		query(sql['add'], params, cb);
	}
	// del event
	this.del = function(params, cb) {
		query(sql['del'], params, cb);
	}
}

// eventDao = new eventDao();
// var userId = 1;
// var listId = 1;
// params = [];
// params.push(userId);
// params.push(listId);
// console.log(params);
// eventDao.query(params, function(err, rows, field) {
// 	console.log(rows);
// });

module.exports = eventDao;