'use strict';

/////////////////////////////////////////////// not found error////////////////////////////////////////////////// 
 /**
 * notFoundHandler middleware
 * @param {Object} req
 * @param  res
 * @param  res
 */

module.exports = (req,res) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
};