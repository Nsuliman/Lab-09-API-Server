'use strict';

//////////////////////////////////////// server error/////////////////////////////////////////////////// 
  /**
 * notFoundHandler middleware
 * @param {Object} req
 * @param  res
 * @param  res
 */

module.exports = (error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({error:error});
};