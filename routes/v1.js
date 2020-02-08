
'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories.js');
const products = require('../models/products/products.js');
/**
 * Model must be a proper model, found in /models folder
 * @param {object} req
 * @param {object} res
 * @param  next
 * @returns pecific model
 */

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid');
    return;
  }
}

/**
 * routs /api/v1/:model
 * @param {model} model
 */
router.param('model', getModel);

router.post('/:model', createModel);
router.get('/:model', handlerAllModel);
router.put('/:model/:id', updateModel);
router.get('/:model/:id', oneModelGet);
router.delete('/:model/:id', deleteModel);



/**
 * create new item
 * @returns {Error}  500 error
 * @returns {object} 201 
 * @param {object} req
 * @param {object} res
 * @param next
 */

function createModel(req, res, next) {
  req.model.create(req.body)
    .then(results => {
      res.status(201).json(results);
    })
    .catch(next);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function handlerAllModel(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * update item
 * @param {object} req
 * @param {object} res
 * @param next
 * @returns {object} 201 
 * @returns {Error}  500 
 */
function updateModel(req, res, next) {
  let _id = req.params.id;
  req.model.update(_id, req.body)
    .then(results => {
      res.status(201).json(results);
    })
    .catch(next);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function oneModelGet(req, res, next) {
  let _id = req.params.id;
  req.model.get(_id)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(next);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * delete item
 * @param {object} req
 * @param {object} res
 * @param next
 * @returns {object} 201
 * @returns {Error}  500 
 */
function deleteModel(req, res, next) {
  let message = 'deleted';
  let _id = req.params.id;
  req.model.delete(_id)
    .then(() => {
      res.status(201).json({ confirm: message });
    })
    .catch(next);
}

module.exports = router;