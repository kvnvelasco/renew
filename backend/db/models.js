var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String
});

var transactionSchema = new Schema({
  date: {
    type: Date, default: Date.now 
  },
  product_name: String,
  user: String
});

var productSchema = new Schema({
  product_name: String,
  details: String
});

var pickUpSchema = new Schema({
  pickup_date: Date,
  address: String
});

var deliverySchema = new Schema({
  delivery_date: Date,
  product_name: String,
  recipient: String,
  address: String
})

var User = mongoose.model('User', userSchema);
var Transaction = mongoose.model('Transaction', transactionSchema);
var Product = mongoose.model('Product', productSchema);
var PickUp = mongoose.model('PickUp', pickUpSchema);
var Delivery = mongoose.model('Delivery', deliverySchema)

module.exports = {
  User,
  Account,
  Transaction,
  ProcurementItem,
  PickUp
};