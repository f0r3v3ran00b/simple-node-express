let express = require("express");
let port = process.env.PORT || 3000;
let app = express();
let moment = require('moment');

app.get("/", function (req, res) {

    res.send(JSON.stringify({
        Hello: `Root page. Hello world. The time is now: ${moment().format()}`
    }));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});