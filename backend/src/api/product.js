const express = require('express')
const { Product } = require('../../db/models');

function postProduct(req, res, next) {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
    category: req.body.category
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
  const _id = req.params.id
  Product.findOne({ _id }).then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
}


function getProducts(req, res, next) {
}

function getProductByName(req, res, next) {
  const name = req.query.name
  
  Product.find()
    .populate('category')
    .then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

function getProductsByCategory(req, res, next) {
  const category = req.query.category
  Product.find({ category }).then(product => {
    res.status(200).send(product)
    next();
  }, err => {
    console.log(err)
    res.status(400).send(err)
    next();
  })
};

module.exports = {
  getProductById,
  getProductByName,
  postProduct,
  getProductsByCategory
}