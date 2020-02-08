/* eslint-disable strict */
'use strict';

//////////////////////////////////////// 3rd party depndencies///////////////////////////////////////////////
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


// /////////////////////////////////////////// middleware//////////////////////////////////////////////////
const handlerNotFound = require('../middleware/404.js');
const handelrError = require('../middleware/500.js');

//////////////////////////////////////////////////  routes ////////////////////////////////////////////////////
const apiRouter = require('../routes/v1.js');

const app = express();

//////////////////////////////////////////// 3rd party middleware///////////////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', apiRouter);

app.use(handlerNotFound);
app.use(handelrError);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`server up ${PORT}`));
  },
};