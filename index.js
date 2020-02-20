const express = require('express');
const bodyParser = require('body-parser');
const app = express();// initialize an app
const routers = require('./routes');
app.use(bodyParser.json()); // parse json
const port = 8081;
app.use('/', routers);
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server started on port " + port);
    }
})
app.use((error, req, res, next) => {
    res.json({
        success: false,
        error,
    })
});