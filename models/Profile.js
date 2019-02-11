const mongose = require('mongoose')
const Schema = mongose.Schema

const ProfileSchema = new Schema({
	user: {
		type:Scheme.Types.ObjectId,
		ref: 'users'
	},
	handle: {
		type:String,
		required: true,
		max:40
	},
	company: {
		type: String,
	},
	website: {
		type: String
	},
	location:{
		type:String
	},
	status: {
		type:String,
		required: true
	},
	skills: {
		type:[String],
		required: true
	},
	bio: {
		type: String
	},
	githubusername: {
		type:String
	},
	experience: [
		{
			title: {
				type: String,
				required: true
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String,
				// required: true
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type:String
			}
		}
	]
});

module.exports = Profile = mongose.model('profiles', UserSchema)
