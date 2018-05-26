const express = require('express')
const { Product } = require('../../db/models');

function postProduct(req, res, next) {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url
  })
  
  product.save().then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
}

function getProductById(req, res, next) {
  const product_id = req.params.id
  Product.findOne({"_id": product_id}).then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
}

function getProductByName(req, res, next) {
  const product_name = req.query.name
  Product.find({"name": product_name}).then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
}

module.exports = {
  getProductById,
  getProductByName,
  postProduct
}