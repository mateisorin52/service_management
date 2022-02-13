const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authenticate = async (credentials) =>{
    const rows = await db.query(
		`SELECT id, email, name, password FROM users
		WHERE email=? LIMIT 1 `,
		[credentials.username]
	);
	const data = helper.emptyOrRows(rows);
    const user = data[0]
   // user.password = bcrypt.hashSync(credentials.password,saltRounds)
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return {
            ...user,
            token
        };
    }


	if (data.length==0) {
		return {
			status: 'fail',
			message: 'Email or password are incorrect'
		}
	}
}

module.exports = {
	authenticate
}