
'use strict';

const mongoose = require('mongoose');
require('../categories/categories-schema.js');




const products = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String },
  description: { type: String},
  category: { type: String, required: true },
}, { toObject: { virtuals: true }, toJson: { virtuals: true } });

products.virtual('categoryV', {
  ref: 'categories',
  localField: 'category',
  foreignField: 'name',
  justOne: false,
});




products.pre('findOne', function () {
  try {
    this.populte('categoryV');
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model('products', products);