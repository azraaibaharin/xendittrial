'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;
const { File, Console } = transports;
const { ElasticsearchTransport } = require('winston-elasticsearch');
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

// logger for access
var access = createLogger({
    transports: [
        new File({
            level: 'debug',
            filename: './logs/access.log',
            maxsize: 5242880, //5MB
            maxFiles: 5,
        }),
        new Console({ level: 'debug' }),
        new ElasticsearchTransport({ 
            client: client,
            level: 'debug',
            index: 'logs-access'
        })
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
        new Console({ level: 'debug' }),
        new ElasticsearchTransport({ 
            client: client,
            level: 'debug',
            index: 'logs-app' 
        })
    ],
    format: combine(
        timestamp(),
        json()
    )
});

module.exports = { access, app }