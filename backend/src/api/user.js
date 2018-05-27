const express = require('express')
const { User } = require('../../db/models');
/**
 * User controller
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {*} next 
 */
exports.getUser = function getUser(req, res, next) {
  // get the current user with the model somehow
  
  const _id = "5b091ee641b04fca4bac0c5f"
  User.findOne({ _id }).then(user => {
    res.status(200).send(user)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })    
}