var Sequelize = require("sequelize");
var mongojs = require("mongojs");

////////////////////// This manages the Database connection //////////////////////
var db ={}

var user = 'root';
var pass = 'root';
var location = {
	'host': "localhost",// Host
	'port': 8889,		// Port
	'dialect': 'mysql'	// Kind of SQL db
};
db.site	= new Sequelize('clearsource',user, pass, location);
// module.exports = {
	// 'blog' : mySql(
	// 	'mongodb://{username}:{password}@{dbipOrDns}:{port}/{dbName}?{options}',
	// 	[
	// 		"{collectionName}"
	// 	]
	// ),

	// 'api' : mongojs(
	// 	'mongodb://{username}:{password}@{dbipOrDns}:{port}/{dbName}?{options}',
	// 	[
	// 		"{collectionName}",
	// 		"{otherCollection}"
	// 	]
	// )
// }

module.exports = db;