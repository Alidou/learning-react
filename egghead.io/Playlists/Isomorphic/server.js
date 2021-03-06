'use strict';

require('node-jsx').install();

var express = require('express');
var renderer = require('react-engine');
var path = require('path');
var app = express();

var engine = renderer.server.create({
	routesFilePath: path.join(__dirname + '/public/routes.jsx'),
	routes: require('./public/routes.jsx')
});

app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(express.static(__dirname + '/public'));

var handler = function(req, res) {
	res.render(req.url, {
		title: 'Person # ' + (req.params.id || 'EMPTY')
	}); 
}

app.get('', handler);
app.get('/:id', handler);

app.listen(4000);