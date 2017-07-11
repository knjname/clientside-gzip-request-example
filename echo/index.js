const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.listen(8080);
app.use(bodyParser.text());

app.post("/*", (req, res, next) => {
    res.json({message: req.body})
});
app.get("/*", (req, res, next) => {
    res.json({message: req.body})
});
