var React = require('react');
var AppStore = require('../../stores/app-store');
var AddToCart = require('../catalog/app-addtocart');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link;

function getCatalogItem(component) {
	var thisItem;
	AppStore.getCatalog().forEach(function(item) {
		if(item.id.toString() === component.props.item) {
			thisItem = item;
		}
	});
	return {item: thisItem};
}

var CatalogDetail = React.createClass({
	mixins:[StoreWatchMixin(getCatalogItem)],

	render: function(){
		var item = this.state.item;

		return (
			<div>
				<h2>{item.title}</h2>
				<img src={item.img} alt=""/>
				<p>{item.description}</p>
				<p>
					${item.cost} <span className="text-success">{item.inCart && '(' + item.qty + ' in cart)'}</span>
				</p>
				<div className="btn-group btn-group-xs">
					<AddToCart item={item} />
					<Link href="/" className="btn btn-default">Continue Shopping</Link>
				</div>
			</div>
		);
	}
});

module.exports = CatalogDetail;