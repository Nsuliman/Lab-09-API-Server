'use strict';
const schema = require('./categories-schema.js');
const Model = require('../mongo.js');
/**
 * Class show a categories Item.
 * @extends Model
 */
class Categories extends Model {
  constructor() {
    super(schema);
  }
}


module.exports =Categories;