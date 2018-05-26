const express = require('express');

const router = express.Router();

router.get('/user', require('./user').getUser);
router.get('/product/:id', require('./product').getProductById);
router.get('/product', require('./product').getProductByName);
router.post('/product', require('./product').postProduct);
router.get('/transaction/:id', require('./transaction').getTransactionById);
router.post('/transaction', require('./transaction').postTransaction);
router.get('/pickup/:userid', require('./pickup').getPickUpByUserId);
router.get('/pickup', require('./pickup').getPickUpByDate)
router.post('/pickup', require('./pickup').postPickUp);
router.get('/delivery/:userid', require('./delivery').getDeliveryByUserId);
router.get('/delivery', require('./delivery').getDeliveryByDate);
router.post('/delivery', require('./delivery').postDelivery);

module.exports = router;