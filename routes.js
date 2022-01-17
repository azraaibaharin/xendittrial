'use strict';

var express = require('express');
var router = express.Router();

var os = require('os');
var osutils = require('os-utils');
var date = require('date-and-time');

const date_format = 'YYYY/MM/DD';

router.get('/', function(req, res, next) {
    osutils.cpuUsage(function(v) {
        res.render('index', { 
            hostname: os.hostname(),
            // version 1: Print OS version
            os_version: os.version(),
            // version 2: Print trial candidate name, start date and current date
            name: 'Azraai Baharin',
            date_start: date.format(new Date('January 13, 2022'), date_format),
            date_curr: date.format(new Date(), date_format),
            // version 3: Print CPU and memory usage
            // usage_cpu: `${(v).toFixed(2)} %`,
            // usage_mem: `${(100 - osutils.freememPercentage()).toFixed(2)} %`
        });
    });
});

router.get('/error', function(req, res, next) {
    return next(new Error('Opps something went wrong!'));
});

router.get('/health', function(req, res, next) {
    return res.status(200).send('OK')
});

module.exports = router;