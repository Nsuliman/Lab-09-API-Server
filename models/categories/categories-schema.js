'use strict';

const mongoose = require('mongoose')
require('./categories.js')

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
  display_naem: { type: String, required: true },
  description: { type: String, required: true }
}, { toObject: { virtuals: true }, toJson: { virtuals: true } });


categoriesSchema.virtual('theProduct', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false
});

categoriesSchema.pre('findOne', function () {
  try {
    this.populate('theProduct');
  } catch (err) {
    console.error(err);
  }
});

module.exports = mongoose.model('categories', categoriesSchema);