let h1 = React.createElement('h1', {}, 'Books'),
	li = React.createElement('li', {}, 'Przewodnik po Madagaskarze'),
	ul = React.createElement('ul', {}, li),
	div = React.createElement('div', {}, h1, ul)

ReactDOM.render(div, document.getElementById('react-element'));