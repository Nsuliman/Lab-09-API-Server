'use  strict';

// 3d party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// custom middleware
const errorHandler = require('../middleware/500.js')
const notFoundHandler = require('../middleware/404.js')

// custom routes
const apiRouter = require('../routes/v1.js')

// app constant
const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
app.use(apiRouter)
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`welcome aboard on ${PORT}`))
    }
}