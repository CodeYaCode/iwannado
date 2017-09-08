// sql.js
var SQL = {}

SQL['USER'] = {
	"register" : "INSERT INTO USER (ACCOUNT, PASSWORD, CREATE_TIME) VALUES (?, ?, ?)",
	"login" : "SELECT * FROM USER WHERE ACCOUNT = ? AND PASSWORD = ?", 
}

SQL['LIST'] = {
	"query" : "SELECT * FROM LIST WHERE USER_ID = ? ORDER BY WEIGHT",
	"add" : "INSERT INTO LIST (USER_ID, LIST_NAME, CREATE_TIME) VALUES (? ,?, ?)",
	"del" : "DELETE FROM LIST WHERE USER_ID = ? AND ID = ?",
	"del_logic" : "UPDATE LIST SET IS_DELETE = ? WHERE LIST = ?",
}

SQL['EVENT'] = {
	"query" : "SELECT * FROM EVENT WHERE USER_ID = ? AND LIST_ID = ? ORDER BY WEIGHT",
	"add" : "INSERT INTO EVENT (USER_ID, LIST_ID, EVENT_NAME, CREATE_TIME) VALUES (?, ?, ?, ?)",
	"del" : "DELETE FROM EVENT WHERE USER_ID = ? AND ID = ?",
	"del_all_list" : "DELETE FROM EVENT WHERE USER_ID = ? AND LIST_ID = ?",
	"del_logic" : "UPDATE EVENT SET IS_DELETE = ? WHERE EVENT = ?",
	"update" : "UPDATE EVENT SET STATUS = ? WHERE USER_ID = ? AND ID = ?",
}

module.exports = SQL;
