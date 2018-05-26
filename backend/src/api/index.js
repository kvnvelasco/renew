const express = require('express');

const router = express.Router();

router.get('/user', userController);

export default router;