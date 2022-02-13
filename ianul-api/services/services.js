const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAll() {
	const rows = await db.query(
		`SELECT * FROM services`
	);
	
	const data = helper.emptyOrRows(rows);
	
	return {
		status: 'success',
		data: data
	}
}

async function getById(id) {
	const rows = await db.query(
		`SELECT * FROM services WHERE id=?`,
		[id]
	);
	
	const data = helper.emptyOrRows(rows);
	
	return data[0];
}

module.exports = {
	getAll,
	getById
}