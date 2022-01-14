'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: `Hello there! ${os.platform()} ${os.release()}` })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);