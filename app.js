"use strict"

var restify = require('restify');
var server = restify.createServer();

server.get('/api/products/', (req,res,next) =>
{
    res.json([{sku: 'ab48cicj36734', asin: 'B015E8UTIU', upc: '888462500449',
        title: 'Apple iPhone 6s 64 GB US Warranty Unlocked Cellphone - Retail Packaging (Rose Gold)',
        image: 'http://ecx.images-amazon.com/images/I/91DpCeCgSBL._SL1500_.jpg' }]);
    next();
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
