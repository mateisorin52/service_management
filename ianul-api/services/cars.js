const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMyCars(id) {
	const rows = await db.query(
		`SELECT * FROM cars WHERE id_client=? AND enabled=1`,
		[id]
	);
	
	const data = helper.emptyOrRows(rows);
	
	return {
		status: 'success',
		data: data
	}
}

async function getById(id) {
	const rows = await db.query(
		`SELECT * FROM cars WHERE id=?`,
		[id]
	);
	
	const data = helper.emptyOrRows(rows);
	
	return data[0];
}

async function addCar(id, car) {
	const result = await db.query(
		`INSERT INTO cars 
		(id_client, vin, brand, model, registration_plate, engine, last_revision, itp_from, itp_until, rca_from, rca_until) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
		[id, car.vin, car.brand, car.model, car.registration_plate, car.engine, car.last_revision, car.itp_from, car.itp_until, car.rca_from, car.rca_until]
	);
	
	let message = "Error while trying to add a car";
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The car has been added succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: message
	}
}

async function editCar(id, car) {
	const result = await db.query(
		`UPDATE cars SET vin=?, brand=?, model=?, registration_plate=?, engine=?, last_revision=?, itp_from=?, itp_until=?, rca_from=?, rca_until=? WHERE id_client=? AND id=?
		`,
		[car.vin, car.brand, car.model, car.registration_plate, car.engine, car.last_revision, car.itp_from, car.itp_until, car.rca_from, car.rca_until, id, car.id]
	);
	
	let message = "Error while trying to edit a car";
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The car has been modified succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: message
	}
}

async function deleteCar(id, car) {
	const result = await db.query(
		`UPDATE cars SET enabled=0 WHERE id_client=? AND id=?
		`,
		[id, car.id]
	);
	
	let message = "Error while trying to delete a car";
	
	if (result.affectedRows) {
		return {
			status: 'success',
			message: 'The car has been deleted succesfully.'
		}
	}
	
	return {
		status: 'fail',
		message: message
	}
}

module.exports = {
	getMyCars,
	addCar,
	editCar,
	deleteCar,
	getById
}