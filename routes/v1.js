'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories.js');
const products = require('../models/products/products.js');






function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
  case "categories":
    req.model = categories;
    // next();
    return;
  case "products":
    req.model = products;
    // next();
    return;
  default:
    next('model invalid');
    return;
  }
}


  
router.param('model', getModel)

router.get('api/v1/:model', handeGetAllModel)
router.post('api/v1/:model', createHandlePostModel)
router.get('api/v1/:model/:id', handleGetOneModel)
router.put('api/v1/:model/:id', handleUpdateModel)
router.delete('api/v1/:model/:id', handledeleteModel)








function handeGetAllModel(req, res, next) {
  req.model.get()
    .then(results => {
        console.log('results', results);
      let count = results.length;
      res.status(200).json({ count, results })
    })
    .catch(next);
}

function handleGetOneModel(req, res, next) {
  let _id = req.params.id
  req.model.get(_id)
    .then(results => {
      res.json(results)
    })
    .catch(next)
}

function createHandlePostModel(req, res, next) {
  let record = req.body
  req.model
    .post(record)
    .then(results => {
      res.json(results)
    })
    .catch(next)
}

function handleUpdateModel(req, res, next) {
  let record = req.body
  let _id = req.params.id
  req.model.put(_id, record)
    .then(results => {
      res.json(results);
    })
    .catch(next)
}

function handledeleteModel(req, res, next) {
  let _id = req.params.id
  const message = 'Item is deleted';
  req.model.delete(_id)

    .then(results => {
      res.json({message})
    })
    .catch(next)
}




module.exports = router;