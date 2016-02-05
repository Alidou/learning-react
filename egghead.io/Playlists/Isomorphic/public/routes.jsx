'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var Index = require('./views/index.jsx');
var Page = require('./views/page.jsx');

var routes = (
	<Router>
		<Route path="/" component={Page}>
			<Route path="/" component={Index} />
			<Route path="/:id" component={Index} />
		</Route>
	</Router>
);

module.exports = routes;