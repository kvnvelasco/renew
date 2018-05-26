const express = require('express')
const { Wallet } = require('../../db/models');

function postWallet(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  const wallet = new Wallet({
    user_id: userid,
    balance: 0 
  })
  
  wallet.save().then(wallet => {
    res.status(200).send(wallet)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getWalletById(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  Wallet.findById(userid, (err, wallet) => {
    if(err) {
      console.log(err)
      res.status(400).send(err)
      next();
    } else {
      res.status(200).send(wallet)
      next();
    }
  })
}

function putWallet(req, res, next) {
  const userid = "5b091ee641b04fca4bac0c5f"
  const wallet_id = req.query.id
  const { balance } = Wallet.find({"user_id":userid})

  const new_balance = balance - req.body.amount
  Wallet.findByIdAndUpdate(wallet_id, { $set: { balance: new_balance }}, (err, wallet) => {
    if(err) {
      console.log(err)
      res.status(400).send(err)
      next();
    } else {
      res.status(200).send(wallet)
      next();
    }
  })
}

module.exports = {
  postWallet,
  putWallet,
  getWalletById
}