'use strict';

const Products = require('../models/products/products.js');
let products = new Products();

// const supergoose = require('./supergoose');

describe('Products Model (Modular)', () => {

  
  it('testing post product route for new product', () => {
    let obj = { name: 'rose', display_name: 'flower', description:'type of flower',category:'flower' };
    products.create(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });




  it('testing get product route to get one product', () => {
    let obj = { name: 'rose', display_name: 'flower', description:'type of flower',category:'flower' };
    products.create(obj)
      .then(data => {
        let record = data.body[0];
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
});




it('testing update product route', () => {
  let obj = { name: 'rose', display_name: 'flower', description:'type of flower',category:'flower' };
  products.create(obj)
    .then(results => {
      expect(results.status).toBe(201);
      expect(results.body.description).toEqual('has multi color');
    });
});


it('test get() all product', () => {
  let obj = { name: 'rose', display_name: 'flower', description:'type of flower',category:'flower' };
  products.create(obj)
    .then(record => {
      // console.log(record);
      products.get(record._id)
        .then(product => {
          console.log(product);
          Object.keys(obj).forEach(key => {
            expect(product[key]).toEqual(obj[key]);
          });
        });
    });
});

it('testing delete product route', () => {
  let obj = { name: 'rose', display_name: 'flower', description:'type of flower',category:'flower' };
  products.create(obj)
    .then((result) => {
      expect(result.body.confirm).toMatch('deleted');
    });
});





























//   






// });