const db = require('./db');
const helper = require('../helper');
const config = require('../config');


const getById = async (id)=>{
	const rows = await db.query(`SELECT id,firstname,lastname,email,phone,enabled, password, token, os, version FROM clients
	WHERE id=? `,[id]);
	const data = helper.emptyOrRows(rows)
	return  data[0]
	
}

async function getMultiple(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT *
		FROM clients LIMIT ?,?`,
		[offset, config.listPerPage]
	);
	
	const data = helper.emptyOrRows(rows);
	const meta = {page};
	
	return {
		data,
		meta
	};
}

async function getByEmailAndPassword(email, password, additional) {
	const rows = await db.query(
		`SELECT id,firstname,lastname,email,phone,enabled, password, token, os, version FROM clients
		WHERE email=? AND password=? LIMIT 1 `,
		[email, password]
	);
	
	const data = helper.emptyOrRows(rows);
	
	if (data.length==0) {
		return {
			status: 'fail',
			message: 'Email or password are incorrect'
		}
	}
	
	const user = data[0];
	
	if (user.enabled == 0) {
		return {
			status: 'fail',
			message: 'Your account has been disabled'
		}
	}
	
	await db.query(`UPDATE clients SET os=?, token=?, version=? WHERE id=?`, [additional.os, additional.token, additional.version, user.id])
	
	return {
		status: 'success',
		data: user
	}
}

async function register(client, additional) {
	
	client.os = additional.os
	client.token = additional.token
	client.version = additional.version
	
	const rows = await db.query(`SELECT id FROM clients WHERE email=?`, [client.email]);
	const existingUser = helper.emptyOrRows(rows);
	if (existingUser.length>0) {
		return {
			status: 'fail',
			message: 'There is another account registered with the same email address.'
		}
	}
	
	const result = await db.query(
		`INSERT INTO clients 
		(firstname, lastname, email, phone, password, os, token, version) VALUES (?,?,?,?,?,?,?,?)`,
		[client.first_name, client.last_name, client.email, client.phone, client.password, client.os, client.token, client.version]
	);
	
	let message = "Error while trying to create an account";
	
	if (result.affectedRows) {
		return getByEmailAndPassword(client.email, client.password, additional);
	}
	
	return {
		status: 'fail',
		message: message
	}
}

async function update(id, client, additional) {
	client.os = additional.os
	client.token = additional.token
	client.version = additional.version
	const result = await db.query(
		`UPDATE clients SET firstname=?, lastname=?, email=?, phone=?, password=?, os=?, token=?, version=? WHERE id=?`,//password=? deleted
		[client.firstname, client.lastname, client.email, client.phone, client.password, client.os, client.token, client.version, id]
	)
	let message = "Error while trying to update an account";
		
	if (result.affectedRows) {
		return getByEmailAndPassword(client.email, client.password, additional);
	}
	
	return {
		status: 'fail',
		message: message
	}
}

module.exports = {
	getMultiple,
	getByEmailAndPassword,
	register,
	update,
	getById
}