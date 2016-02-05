var React = require('react');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart');

var CatalogItem = React.createClass({
	render: function(){
		var itemStyle = {
			borderBottom: '1px solid #ccc',
			paddingBottom: 15
		};

		var item = this.props.item;
		return (
			<div className="col-sm-3" style={itemStyle}>
				<h4>{item.title}</h4>
				<img src={item.img} alt=""/>
				<p>{item.summary}</p>
				<p>
					${item.cost} <span className="text-success">{item.inCart && '(' + item.qty + ' in cart)'}</span>
				</p>
				<div className="btn-group btn-group-xs">

					<Link href={'/item/' + item.id} className="btn btn-default">Learn More</Link>
					<AddToCart item={item} />
				</div>
			</div>
		);
	}
});

module.exports = CatalogItem;