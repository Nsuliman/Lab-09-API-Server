
'use strict';

const mongoose = require('mongoose');
require('./products.js');




const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String },
  description: { type: String},
  category: { type: String, required: true },
}, { toObject: { virtuals: true }, toJson: { virtuals: true } });

productsSchema.virtual('category', {
  ref: 'categories',
  localField: 'category',
  foreignField: 'name',
  justOne: false,
});




productsSchema.pre('findOne', function () {
  try {
    this.populte('category');
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model('products', productsSchema);