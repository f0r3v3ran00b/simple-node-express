'use strict';

const express = require("express");
const router = express.Router();
let port = process.env.PORT || 3000;
let app = express();
let moment = require('moment');
let bodyparser = require('body-parser')
const addRequestId = require('express-request-id')();
const serverless = require('serverless-http');
const morgan = require('morgan')
var winston = require('./config/winston');


const name = process.env.MY_NAME || `[Name not set in environment variables]`

// Example using Router - Gets resolved to /routes because of how it's mounted below
router.get("/", function (req, res) {
    winston.info('Hello again distributed logs');
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({
        message: `[Using Router] Root page. Hello ${name}.`
    }));
});

app.get("/", function (req, res) {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({
        message: `Root page. Hello ${name}.`
    }));
});

app.post("/subject", (req, res) => {
    res.send(JSON.stringify({
        subject: `dummy`,
        transaction_id: req.query[`transaction_id`],
        created_date: `${moment().format()}`
    }));
});

router.get("/subject", (req, res) => {
    res.send(JSON.stringify({
        subject: `dummy`,
        transaction_id: req.query[`transaction_id`],
        created_date: `${moment().format()}`
    }));
});


// Example using route parameters also request parameters! confusing sometimes...
// Will resolve to, say, http://localhost:3000/users/sanju/vices/wine
app.get("/users/:userid/vices/:viceid", (req, res) => {
    console.log(`Request params: ${req.params}`);
    res.send(JSON.stringify({
        user: `${req.params.userid}`,
        vice: `${req.params.viceid}`
    }))
});

app.use(addRequestId);
app.use(morgan('combined', {
    stream: winston.stream
}));
app.use('/routes', router);
app.use(bodyparser.json())
app.use('/.netlify/functions/app', router);

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});


module.exports = app
module.exports.handler = serverless(app);