const express = require('express');

const router = express.Router();

router.get('/user', require('./user').getUser);
router.get('/product/:id', require('./product').getProductById);
router.get('/product', require('./product').getProductByName);
router.get('/productcategory', require('./product').getProductsByCategory);
router.post('/product', require('./product').postProduct);
router.get('/category/all', require('./category').getCategories)
router.post('/category', require('./category').createCategory)
router.get('/pickup/:userid', require('./pickup').getPickUpByUserId);
router.get('/pickup', require('./pickup').getPickUpByDate)
router.post('/pickup', require('./pickup').postPickUp);
router.get('/delivery/:userid', require('./delivery').getDeliveryByUserId);
router.get('/delivery', require('./delivery').getDeliveryByDate);
router.post('/delivery', require('./delivery').postDelivery);
router.get('/wallet', require('./wallet').getWalletById);
router.post('/wallet', require('./wallet').postWallet);
router.post('/wallet', require('./wallet').putWallet);

module.exports = router;