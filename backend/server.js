const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const mongoose = require('./db/mongodb-connect');

var { User } = require('./db/models');


app.use((req, res, next) => {
  const date = Date.now();
  next();
  const time = Date.now() - date;
  console.log(`${res.statusCode} ${req.method.toUpperCase()} ${req.path} -- ${time}ms`)
})

app.use('/api/v1', require('./src/api'))


app.listen(port, () => console.log(`Server is up on port ${port}`));