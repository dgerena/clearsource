/**
* Article.js
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
	identity: "Article",
	tableName: "articles",
	connection: "ClearSourceDB",

	attributes: {
		active:{
			type:"boolean",
			defaultsTo: true,
		},
		uuid: {
			type: "string",
			unique: true,
			defaultsTo: uuid.v4
		},
		topic: "string",
		title: {
			type: "string",
			required: true,
			maxLength: 60
		},
		body: {
			type: "string",
			required: true
		},
		authorId: {
			type: "string",// will be the uuid of the user who created it.
			required: true
		},
		author: {
			type: "string",
			required: true
		},
		reference:{
			type: "string",
			url: true,
			required: true
		},
		parent: "string"
	},
	beforeCreate: function(values,callback){
		unirest
			.get(values.reference)
			.header(header)
			.end(function (response){
				if(response.body){
					callback();
				}else{
					callback("Reference is not valid");
				}
			});
	}
};

