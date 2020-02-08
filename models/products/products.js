'use strict';

const schema = require('./products-schema.js');

const Model = require('../mongo.js');
/**
 * Class show a products Item.
 * @extends Model
 */
class Products extends Model {

  constructor() {
    super(schema);
  }
}

module.exports = Products;