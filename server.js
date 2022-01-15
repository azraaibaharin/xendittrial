'use strict';

// Requires
const express = require('express');
const os = require('os');
const osutils = require('os-utils');
const date = require('date-and-time');

// Constants
const date_format = 'YYYY/MM/DD';
const now = new Date();
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  osutils.cpuUsage(function(v) {
    res.render('index', { 
      title: 'Hey', 
      // version 1: Print OS version
      os_version: `${os.version}`,
      // version 2: Print trial candidate name, start date and current date
      candidate_name: 'Azraai Baharin',
      date_start_trial: date.format(new Date('January 13, 2022'), date_format),
      date_current: date.format(now, date_format),
      // version 3: Print CPU and memory usage
      usage_cpu: `${(v).toFixed(2)} %`,
      usage_mem: `${(100 - osutils.freememPercentage()).toFixed(2)} %`
    });
  });
});

app.get('/error', (req, res) => {
  throw new Error('BROKEN');
});

// basic error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).render('index', {
    title: 'Hey',
    error: 'Something broke!'
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);