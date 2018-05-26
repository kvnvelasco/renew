const express = require('express');

const router = express.Router();

router.get('/user', require('./user').userController);

module.exports = router;