'use strict';
    
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
    
describe('api server', () => {
        
        
  it('test error 500  ', () => {
    return mockRequest
      .get('/gen-error')
      .then(data => {
        expect(data.status).toBe(500);
        //expect(response.status).toEqual(500);
      }).catch(e => console.error(e));
  });  
        
     
  it('test not found route 404', () => {
    return mockRequest
      .get('/main')
      .then(data => {
        expect(data.status).toBe(404);
      }).catch(e => console.error(e));
  }); 

});
