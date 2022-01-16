'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;
const { File, Console } = transports;

// logger for access
var access = createLogger({
    transports: [
        new File({
            level: 'debug',
            filename: './logs/access.log',
            maxsize: 5242880, //5MB
            maxFiles: 5,
        }),
        new Console({ level: 'debug' })
    ],
    format: combine(
        timestamp(),
        json()
    )
});

// logger for all app
var app = createLogger({
    transports: [
        new File({
            level: 'info',
            filename: './logs/app.log',
            maxsize: 5242880, //5MB
            maxFiles: 5,
        }), 
        new Console({ level: 'debug' })
    ],
    format: combine(
        timestamp(),
        json()
    )
});

module.exports = { access, app }