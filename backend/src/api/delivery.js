const express = require('express')
const { Delivery, Wallet } = require('../../db/models');

async function postDelivery(req, res, next) {
  const user_id = "5b091ee641b04fca4bac0c5f"
  const { balance } = await Wallet.findOne({ user_id })

  if(balance > req.body.amount) {
    const delivery = new Delivery({
      date_taken: new Date,
      user_id: user_id,
      product_id: req.body.product_id,
      date_of_delivery: req.body.date_of_delivery,
      address: req.body.address,
      amount: req.body.amount
    });
  
    delivery.save()
    .then(delivery => {
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
      const new_balance = wallet.balance - parseFloat(req.body.amount)
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
  } else {
    console.log('Insufficient funds')
  }
};

function getDeliveryByUserId(req, res, next) {
  const user_id = req.params.userid
  Delivery.find({ user_id }).then(delivery => {
    res.status(200).send(delivery)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getDeliveryByDate(req, res, next) {
  const enddate = new Date(req.query.date);
  const startdate = new Date;
  Delivery.find({"date_of_delivery": { $gte:startdate,$lte:enddate }}).then(delivery => {
    res.status(200).send(delivery)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
}

module.exports = {
  postDelivery,
  getDeliveryByUserId,
  getDeliveryByDate
}