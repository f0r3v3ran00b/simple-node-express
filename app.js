let express = require("express");
let port = process.env.PORT || 3000;
let app = express();
let moment = require('moment');
const name = process.env.MY_NAME || `[Name not set in environment variables]`

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
        created_date: $moment().format()
    }));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

module.exports = app