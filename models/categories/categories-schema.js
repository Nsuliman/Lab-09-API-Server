
'use strict';

const mongoose = require('mongoose');
require('./categories.js');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String },
}, { toObject: { virtuals: true }, toJson: { virtuals: true } });

categoriesSchema.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categoriesSchema.pre('findOne', function () {
  try {
    this.populate('products');
  } catch (err) {
    console.error(err);
  }
});

module.exports = mongoose.model('categories', categoriesSchema);