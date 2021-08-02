const express = require('express');
const cors = require('cors');
const app = express();

var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200 ,// For legacy browser support
        methods: "GET"
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);