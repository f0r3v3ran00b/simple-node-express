let express = require("express");
let port = process.env.PORT || 3000;
let app = express();
let moment = require('moment');
const name = process.env.MY_NAME || `[Name not set in environment variables]`

app.get("/", function (req, res) {

    res.send(JSON.stringify({
        message: `Root page. Hello ${name}. The time is now: ${moment().format()}`
    }));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});