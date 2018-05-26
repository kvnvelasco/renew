const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const mongoose = require('./db/mongodb-connect');

var { User } = require('./db/models');

app.listen(port, () => console.log(`Server is up on port ${port}`));