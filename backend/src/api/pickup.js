const express = require('express')
const { PickUp } = require('../../db/models');

function postPickUp(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  const pickup = new PickUp({
    date_of_pickup: req.body.date_of_pickup,
    address: req.body.address,
    user_id: userid,
    active: true
  });

  pickup.save().then(pickup => {
    res.status(200).send(pickup)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
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
  const end_date = new Date(req.query.date)
  console.log('dates',end_date)
  PickUp.find({"date_of_pickup": { $lte:end_date }, active: true }).then(pickup => {
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