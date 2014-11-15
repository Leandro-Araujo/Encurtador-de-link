
/**
 * Module dependencies.
 */
var Mongoose = require('mongoose');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var site = require('./routes/site');
var http = require('http');
var path = require('path');
var banco = require('./model/db');

var app = express();

//Author: Leandro Silva Araújo
// https://github.com/Leandro-Araujo
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/', site.gerar);
app.get('/:site', site.criar);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
