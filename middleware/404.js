'use strict';

function notFoundHandler(req, res, next) {
    res.status(404);
    res.statusMessage = 'NOT FOUND';
    res.json({ error: 'NOT FOUND' });
}

module.exports = notFoundHandler;   