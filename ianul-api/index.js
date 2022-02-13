const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const clientsRouter = require('./routes/clients');
const carsRouter = require('./routes/cars');
const requestsRouter = require('./routes/requests');
const servicesRouter = require('./routes/services');
const messagesRouter = require('./routes/messages');
const brandRouter = require('./routes/brands');
const usersRouter = require('./routes/users');
app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
	extended: true,
  })
);
function authTest(req, res){
  res.json(201, {});
  
}

app.get('/', authTest)
app.use('/clients', clientsRouter);
app.use('/cars', carsRouter);
app.use('/requests', requestsRouter);
app.use('/services', servicesRouter);
app.use('/messages', messagesRouter);
app.use('/brands', brandRouter);
app.use('/users',usersRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({status: 'fail',message: err.message});
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});