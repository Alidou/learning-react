var React = require('react');
var CarSummary = require('./app-cartsummary');

var Header = React.createClass({
	render: function(){
		return (
			<div className="row">
				<div className="col-sm-6">
					<h1>Lets Shop</h1>
				</div>
				<div className="col-sm-2 col-sm-push-3">
					<br/>
					<CarSummary />
				</div>
			</div>
		)
	}
});

module.exports = Header;