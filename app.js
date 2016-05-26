let BooksHeader = React.createClass({
	render : function() {
		return React.createElement('h1', {
			style : {
				color : this.props.color
			}
		}, this.props.children); //className i htmlFor
	}
});

let BooksList = React.createClass({
	render : function() { //lifecycle - generate DOM representation
		let lookListItemNode = this.props.books.map(function (book, idx){
			return React.createElement('li', {
				id: 'book-' + idx, 
				key: idx
			}, book.title, React.createElement('span', {}, ' ' + book.year)); 
		});
		
		return React.createElement('ul', {}, lookListItemNode);
	}
});

var BooksComponent = React.createClass({
	loadBooks : function() {
		var bookList = [ {
			title : 'Przewodnik po Madagaskarze',
			year : 2014
		}, {
			title : 'Encyklopedia kretów',
			year : 2011
		} ];
		this.setState({
			books : bookList
		})
	},
	getInitialState : function() {
		return {
			books : []
		}
	},
	render : function() {
		return React.createElement('div', {
			className : 'books-component'
		}, React.createElement(BooksHeader, {
			color : 'blue'
		}, 'Books'), React.createElement(BooksList, {
			books : this.state.books
		}));
	},
	componentDidMount : function() {
		this.loadBooks();
	}
});

var element = React.createElement(BooksComponent);
ReactDOM.render(element, document.getElementById('react-element'));