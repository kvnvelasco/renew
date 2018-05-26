const express = require('express')
const { Transaction } = require('../../db/models');

function postTransaction(req, res, next) {
  const transaction = new Transaction({
    date: req.body.date || new Date,
    product_name: req.body.product_name,
    user: req.body.user
  });

  transaction.save().then(transaction => {
    res.status(200).send(transaction)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  });
};

function getTransactionById(req, res, next) {
  const trans_id = req.params.id
  Transaction.findOne({"_id": trans_id}).then(transaction => {
    res.status(200).send(transaction)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  });
}

module.exports = {
  postTransaction,
  getTransactionById
}