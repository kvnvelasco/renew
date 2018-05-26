var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true }
});

var transactionSchema = new Schema({
  date: {
    type: Date, 
    default: Date.now() 
  },
  product_name: { type: String, required: true },
  user: String
});

var productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  image_url: String
});

var pickUpSchema = new Schema({
  date_of_pickup: { type: Date, required: true },
  address: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  active: Boolean
});

var deliverySchema = new Schema({
  date_of_delivery: { type: Date, required: true },
  products: { type: [String], required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  address: { type: String, required: true },
  active: Boolean
})

var User = mongoose.model('User', userSchema);
var Transaction = mongoose.model('Transaction', transactionSchema);
var Product = mongoose.model('Product', productSchema);
var PickUp = mongoose.model('PickUp', pickUpSchema);
var Delivery = mongoose.model('Delivery', deliverySchema)

module.exports = {
  User,
  Transaction,
  Product,
  PickUp,
  Delivery
};