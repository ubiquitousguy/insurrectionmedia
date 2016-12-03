const React = require('react');
const ReactDOM = require('react-dom');


var App = React.createClass({
	render () {
		return (
			<div>
				<h1>hi</h1>
			</div>
		);
	},
});

ReactDOM.render(
	<App />,
    document.getElementById('app')
);
