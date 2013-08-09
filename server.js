/**
 * Node.js Express and MongoDB starting project
 *
 *
 * 2013 (c) Equan Pr.
 * eq@junwatu.com
 */

var express = require('express'),
    app = express(),
    engines = require('consolidate');

app.configure(function () {

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));

    app.engine('html', engines.handlebars);

    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');

    app.set('PORT', process.env.PORT || 5000);

    app.set('MONGODB_URI', process.env.MONGODB_URI || 'mongodb://localhost/nemdb');
});

app.configure('development', function () {
    app.use(express.logger());
    app.use(express.errorHandler());
})

// routes
app.get('/', function(req, res){
    res.end('Node.js - Express');
});

app.listen(app.get('PORT'));
console.log('server port: ' + app.get('PORT'));