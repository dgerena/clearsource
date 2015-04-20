var Sequelize = require("sequelize");
var sha224 = require('js-sha256').sha224;
//User model
app.models.User = db.site.define('user', {
	'id': {'type': Sequelize.UUID, 'defaultValue': Sequelize.UUIDV4, 'primaryKey': true},
	'active': Sequelize.BOOLEAN,
	'fullName': Sequelize.TEXT,
	'password': Sequelize.STRING(56),
	'customerToken': Sequelize.UUID

}