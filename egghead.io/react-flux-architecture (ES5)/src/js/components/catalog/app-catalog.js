var React = require('react');
var AppStore = require('../../stores/app-store');
var CatalogItem = require('./app-catalogitem');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function getCatalog() {
	return { items: AppStore.getCatalog() }
}

var Catalog= React.createClass({
	mixins: [StoreWatchMixin(getCatalog)],

	render: function(){
		var items = this.state.items.map(function(item) {
			return <CatalogItem item={item} key={item.id} />
		});

		return (
			<div className="row">
				{items}
			</div>
		)
	}
});

module.exports = Catalog;