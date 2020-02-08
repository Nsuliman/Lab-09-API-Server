'use strict';


const Categories = require('../models/categories/categories.js');

const categories = new Categories();

describe('Categories Model (Modular)', () => {



  it('Test post( ) for new category', () => {

    let obj = { name: 'rose' , display_name:'flower', description:'type of flower'};
    categories.create(obj)
      .then(data => {
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });



  

  
  it('Test get( ) for one category', () => {
    let obj = { name: 'rose' , display_name:'flower', description:'type of flower'};
    categories.create(obj)
      .then(record => {
        // console.log(record);
        categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });


  
  

  
  it('Test update( ) category ', () => {
    let obj = { name: 'rose' , display_name:'flower', description:'type of flower'};
    categories.create(obj)
      .then(outputs => {
        expect(outputs.status).toBe(200);
        expect(outputs.body.description).toEqual('type of flower');
      });
  });
});

  
it('Test get() all categories', () => {
  let obj = { name: 'rose' , display_name:'flower', description:'type of flower'};
  categories.create(obj)
    .then(record => {
      // console.log(record);
      categories.get(record._id)
        .then(category => {
          console.log(category);
          Object.keys(obj).forEach(key => {
            expect(category[key]).toEqual(obj[key]);
          });
        });
    });
});
  

it('Test delete( ) category ', () => {
  let obj = { name: 'rose' , display_name:'flower', description:'type of flower'};
  categories.create(obj)

  // console.log('ddddddddddddddddddddddddddddddddddata',data.body);
    
    .then((output) => {
      expect(output.body.confirm).toMatch('deleted');
    });
});