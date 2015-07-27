/**
* Topic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var uuid = require("uuid");
var unirest = require("unirest");//makes a request to a url of my choosing.
var header = { //defines the simulated browser that unirest in making the request through.
	'Accept': 'application/x-ms-application, image/jpeg, application/xaml+xml',
	'User-Agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64;',
	'Accept-Encoding' : 'gzip, deflate'
}

module.exports = {
	identity: "Topic",
	tableName: "topics",
	connection: "ClearSourceDB",

	attributes: {
		active:"boolean",
		uuid: {
			type: "string",
			unique: true,
			defaultsTo: uuid.v4
		},
		topic: "string"
	}
};