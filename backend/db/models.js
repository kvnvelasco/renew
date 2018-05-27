const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true }
});

const transactionSchema = new Schema({
  date: {
    type: Date, 
    default: Date.now() 
  },
  product_name: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['pickup', 'delivery'], required: true }
});

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  image_url: String,
  category: { type: Schema.Types.ObjectId }
});

const categorySchema = new Schema({
  name: String,
  description: String,
})

const pickUpSchema = new Schema({
  date_taken: Date,
  user_id: { type: Schema.Types.ObjectId, required: true },
  product_id: { type:  Schema.Types.ObjectId, required: true },
  date_of_pickup: { type: Date, required: true },
  address: { type: String, required: true },
  amount: { type: Number, required: true }
});

const deliverySchema = new Schema({
  date_taken: Date,
  user_id: { type: Schema.Types.ObjectId, required: true },
  product_id: { type: [Schema.Types.ObjectId], required: true },
  date_of_delivery: { type: Date, required: true },
  address: { type: String, required: true },
  amount: { type: Number, required: true }
})

const walletSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, unique: true },
  balance: { type: Number, required: true },
})

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const PickUp = mongoose.model('PickUp', pickUpSchema);
const Delivery = mongoose.model('Delivery', deliverySchema);
const Wallet = mongoose.model('Wallet', walletSchema);
const Category = mongoose.model('Category', categorySchema)

module.exports = {
  User,
  Product,
  PickUp,
  Delivery,
  Wallet,
  Category
};