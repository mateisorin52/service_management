const env = process.env;

const config = {
  secret :"secret221",
  db: {
	host: env.DB_HOST || 'localhost',
	user: env.DB_USER || 'root',
	password: env.DB_PASSWORD || '',
	database: env.DB_NAME || 'app',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;