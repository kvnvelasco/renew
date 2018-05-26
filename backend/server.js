const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const mongoose = require('./db/mongodb-connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  const date = Date.now();
  next();
  const time = Date.now() - date;
  console.log(`${res.statusCode} ${req.method.toUpperCase()} ${req.path} -- ${time}ms`)
})

app.use('/api/v1', require('./src/api'))


app.listen(port, () => console.log(`Server is up on port ${port}`));