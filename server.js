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
  res.render('index', { 
    title: 'Hey', 
    os_info: `${os.platform()} ${os.release()}`,
    candidate_name: 'Azraai Baharin',
    date_start_trial: new Date(2021, 12, 13).toDateString(),
    date_current: new Date().toDateString()
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);