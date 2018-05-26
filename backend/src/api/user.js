const express = require('express')
/**
 * User controller
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {*} next 
 */
exports.userController = function userController(req, res, next) {
  // get the current user with the model somehow
  res.sendStatus(200);
  
  next();
}