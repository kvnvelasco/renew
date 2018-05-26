const express = require('express')
const { Delivery } = require('../../db/models');

function postDelivery(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  const delivery = new Delivery({
    date_of_delivery: req.body.date_of_delivery,
    products: req.body.product_name,
    user_id: userid,
    address: req.body.address,
    active: true
  });

  delivery.save().then(delivery => {
    res.status(200).send(delivery)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getDeliveryByUserId(req, res, next) {
  const user_id = req.params.userid
  Delivery.find({"user_id": user_id}).then(pickup => {
    res.status(200).send(delivery)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getDeliveryByDate(req, res, next) {
  const enddate = new Date(req.query.date)
  Delivery.find({"date_of_delivery": { $lte:enddate }, active: true }).then(delivery => {
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