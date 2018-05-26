var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
});

var accountSchema = new Schema({

});

var transactionSchema = new Schema({

});

var procurementItemSchema = new Schema({

});

var pickUpSchema = new Schema({

});

var User = mongoose.model('User', userSchema);
var Account = mongoose.model('Account', accountSchema);
var Transaction = mongoose.model('Transaction', transactionSchema);
var ProcurementItem = mongoose.model('ProcurementItem', procurementItemSchema);
var PickUp = mongoose.model('PickUp', pickUpSchema);

module.exports = {
  User,
  Account,
  Transaction,
  ProcurementItem,
  PickUp
};