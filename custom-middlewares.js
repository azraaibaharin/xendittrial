'use strict';

const logger = require('./logger.js');

function requestLogger(req, res, next) {
    logger.access.debug(`Received ${req.method} - ${req.path}.`)
    next()
}

function errorLogger(error, req, res, next) {
    logger.app.error(`'${error}' at '${req.path}'.`)
    next(error) 
}

function errorResponder(error, req, res, next) {
    res.render('index', {
        error: error
    })
}

module.exports = {
    requestLogger,
    errorLogger,
    errorResponder
}