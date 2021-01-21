const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const app = express();

app.use(favicon(__dirname + "../build/favicon.ico"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../build")));

app.use("/sort", require('./routers/sort'));
app.use("/data", require('./routers/getData'));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;

