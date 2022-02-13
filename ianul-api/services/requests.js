const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const cars = require('../services/cars');
const services = require('../services/services');
const messages = require('../services/messages');
const clients = require('../services/clients')
const moment = require('moment')
const getAllRequests = async () =>{
	const rows = await db.query(`SELECT * FROM requests`);
	const data = helper.emptyOrRows(rows);
	for (const request of data) {
		const car = await cars.getById(request.id_car);
		const service = await services.getById(request.id_service);
		const data_messages = await messages.getMessages(request.id);
		const client = await clients.getById(request.id_client)
		request.client = client
		request.car = car
		request.service = service
		request.messages = data_messages
		delete request.id_client
		delete request.id_car
		delete request.id_service
	}
	return {
		status: 'success',
		data: data
	}
	
}

async function getMyRequests(id) {
	const rows = await db.query(
		`SELECT * FROM requests WHERE id_client=?`,
		[id]
	);
	
	const data = helper.emptyOrRows(rows);
	
	for (const request of data) {
		const car = await cars.getById(request.id_car);
		const service = await services.getById(request.id_service);
		const data_messages = await messages.getMessages(request.id);
		request.car = car
		request.service = service
		request.messages = data_messages
		
		delete request.id_car
		delete request.id_service
	}
	
	return {
		status: 'success',
		data: data
	}
}


async function updateRequest(id, request) {
	
	const result = await db.query(
		` UPDATE requests SET details = ?, status = ?  WHERE requests.id = ${id}`,
		[request.details,request.status]
	);
	let message = "Error while trying to add a request";
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The request has been updated succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: message
	}
}



async function addRequest(id, request) {
	const result = await db.query(
		`INSERT INTO requests 
		(id_client, id_car, id_service, details) VALUES (?,?,?,?)`,
		[id, request.id_car, request.id_service, request.details]
	);
	
	let message = "Error while trying to add a request";
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The request has been created succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: message
	}
}

module.exports = {
	getAllRequests,
	getMyRequests,
	addRequest,
	updateRequest
}