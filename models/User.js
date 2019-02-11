const mongose = require('mongoose')
const Schema = mongose.Schema

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required:true
	},
	email: {
		type: String,
		required:true
	},
	password: {
		type: String,
		required:true
	},
	avatar: {
		type: String,
		// required:true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},

})


module.exports = User = mongose.model('users', UserSchema)
