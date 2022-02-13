const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
	const rows = await db.query(
		`SELECT title FROM make ORDER BY title ASC`
	);
	
	const data = helper.emptyOrRows(rows);
	
	return {
		status: 'success',
		data: data
	}
}

module.exports = {
	get
}