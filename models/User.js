const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatSchema = new Schema({
	to: {
		type: String,
		unique: true
	},
	from: {
		type: String,
		unique: true
	},
	message: String,
	delivered: Boolean
})


const UserSchema = new Schema({
	name: {
		type: String,
		unique: true
	},
	password: String,
	id: {
		type: String,
		unique: true
	},
	socket_id: {
		type: String,
		unique: true
	}, 
	chats: [ChatSchema]
})

const UserModel = mongoose.model("UserSchema", UserSchema);

module.exports = UserModel;