"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.application = express();
    }
    return App;
}());
var app = new App().application;
app.get("/", function (req, res) {
    res.send(" was sup  ");
});
app.listen(8080, function () { return console.log(" Server is on"); });
