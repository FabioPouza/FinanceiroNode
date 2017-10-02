var http = require('http');
var app = require('./config/express');
var config = require('./config/config.global');

http.createServer(app).listen(config.PORTA, function () {
    console.log('servidor iniciado na porta: ' + config.PORTA);
});