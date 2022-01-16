'use strict';

const express = require('express');
const routes = require('./routes.js');
const logger = require('./logger.js');
const { requestLogger, errorLogger, errorResponder } = require('./custom-middlewares.js');

const app = module.exports = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.set('views', './views');
app.set('view engine', 'pug');

app.use(requestLogger);

app.use(routes);

app.use(errorLogger);
app.use(errorResponder);

logger.app.debug(`Running on http://${HOST}:${PORT}`);
app.listen(PORT, HOST);