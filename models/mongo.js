/* eslint-disable strict */
'use strict';
  /**
   * Model Constructor
   * @param schema - mongo schema
   */
class ModelCRUD {
  constructor(schema) {
    this.schema = schema;
  }
  /**
  * retrieve a record 
  * @param {string} _id
  */
  get(_id) {
    if (_id) {
      return this.schema.find(_id);
    } else {
      return this.schema.find({});
    }
  }
  /**
   * add new record
   * @param {object} record
   */

  create(obj) {
    let newObject = new this.schema(obj);
    return newObject.save();
  }
 /**
   * update an existing record by id
   * @param {string} _id
   * @param {object} updatedObj
   */

  update(_id, updatedObj) {
    return this.schema.findByIdAndUpdate(_id, updatedObj);
  }


  /**
  * remove record by id
  * @param {string} id
  */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = ModelCRUD;