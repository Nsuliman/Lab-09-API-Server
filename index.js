
'use strict';

const server = require('./lib/server.js');
const mongoose =require('mongoose');
require('dotenv').config();

const MONGODB_URI = 'mongodb://localhost:27017/lab09' ;

const mongooseOptions = {
  useNewUrlParser: true ,
  useCreateIndex: true ,
  useUnifiedTopology: true,
  useFindAndModify: true,
};

// mongoose.connect(MONGODB_URI)
mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('Database connected');    //successfully connect
  })
  .catch((error) => {
    console.log('Failed to connect to database: ', error);
  });
server.start();