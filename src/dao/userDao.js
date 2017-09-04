// userDao.js
var query = require('../db/connector.js')
var sql = require('../db/sql.js')['USER']

function userDao() {
	this.login = function(account, password) {
		var result;
		query(sql['login'], [account, password], function(err, vals, field) {
			console.log('vals: ', vals);
		});
	}
}

// test
// userDao = new userDao();
// var result = userDao.login('liuchen', '123456')

module.exports = userDao;