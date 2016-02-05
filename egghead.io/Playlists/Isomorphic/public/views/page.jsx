var React = require('react');
var Link = require('react-router').Link;

var Page = React.createClass({
	render: function(){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
			</head>
			<body>
				<ul>
					{[1,2,3,4,5,6,7,8,9].map(function (item, i) {
						return (
							<li key={i}>
								<Link to={"/" + item} params={{id: item}}>
									Person # {item}
								</Link>
							</li>
						)
					})}
				</ul>
				{this.props.children}
				<script src="/bundle.js"></script>
			</body>
			</html>
		);
	}
});

module.exports = Page;