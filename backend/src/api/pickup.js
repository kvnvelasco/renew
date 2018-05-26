const express = require('express')
const { PickUp, Wallet } = require('../../db/models');

function postPickUp(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  const pickup = new PickUp({
    date_taken: new Date,
    user_id: userid,
    product_id: req.body.product_id,
    date_of_pickup: req.body.date_of_pickup,
    address: req.body.address,
    amount: req.body.amount
  });

  pickup.save()
  .then(pickup => {
    return null
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
  .then((_) => {
    return Wallet.findOne()
  })
  .then(wallet => {
    const new_balance = wallet.balance + parseFloat(req.body.amount)
    return  Wallet.findByIdAndUpdate(wallet._id, { $set: { balance: new_balance }})
  })
  .then(saved => {
    res.status(200).send(`${saved.balance}`)
    next()
  })
  .catch(err => {
    console.error(err)
    res.sendStatus(400)
    next()
  })
};

function getPickUpByUserId(req, res, next) {
  const user_id = req.params.userid
  PickUp.find({"user_id": user_id}).then(pickup => {
    res.status(200).send(pickup)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getPickUpByDate(req, res, next) {
  const enddate = new Date(req.query.date)
  const startdate = new Date
  PickUp.find({"date_of_pickup": { $gte:startdate, $lte:enddate }}).then(pickup => {
    res.status(200).send(pickup)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

module.exports = {
  postPickUp,
  getPickUpByUserId,
  getPickUpByDate
}