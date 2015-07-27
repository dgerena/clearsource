/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var uuid = require("uuid");
var sha256 = require("js-sha256").sha256;
var salt = "ce844ed8-a78e-4284-96e2-c4451babe14d";

module.exports = {
	identity: "User",
	tableName: "users",
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
		type: {
			type: "string",
			defaultsTo: "user",
		},
		userName: {
			type:"string",
			unique: true,
		},
		theme:"string",
		firstName: "string",
		lastName: "string",
		email: "email",
		adminOf: "array",
		reference:{
			type: "string",
			url: true,
			required: true
		},
		password: "string",
		createPassword: function(password){
			return sha256(this.uuid+this.email+password+salt);
		},
		verifyPassword: function(password){
			return this.password === this.createPassword(password)
		}

	},
	beforeCreate: function(values,callback){
		values.password = sha256(values.uuid+values.email+values.password+salt);
		callback();
	},
	afterCreate: function(values,callback){
		values.created = true;
		callback();
	}
};

