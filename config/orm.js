// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + " ;";
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
	},
	insertOne: function(table, col, burgerChoice, cb){
		var queryString = "INSERT into " + table + " (" + col.toString() + ") VALUES ( ? );";
  		connection.query(queryString, [burgerChoice], function(err, data) { 
       if (err) {
        throw err;
       }
      cb(data);
    });

	},
	updateOne: function(table, col, whichBurger, cb){
		var queryString = "UPDATE " + table + " SET " + col.toString() + " = true WHERE id = ? ;"; 
		connection.query(queryString, [whichBurger], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    }); 
	}
};


// module.exports = orm;
