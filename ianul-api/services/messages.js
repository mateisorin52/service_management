const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMessages(id) {
	const rows = await db.query(
		`SELECT * FROM messages WHERE id_request=?`, [id]
	);
	
	const data = helper.emptyOrRows(rows);
	return data;
}

async function addMessage(id, message) {
	console.log(message)
	const result = await db.query(
		`INSERT INTO messages 
		(id_request, message, created_by, created_at) VALUES (?,?,?,?)`,
		[id, message.message, message.created_by,message.created_at]
	);
	
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The message has been saved succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: "Error while trying to add a message"
	}
}

module.exports = {
	getMessages,
	addMessage
}