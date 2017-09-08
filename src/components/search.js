import React from 'react';

class SearchBar extends React.Component{

	
	constructor(props){

		super(props);

		this.state = {term :''};

	}


render(){

		return(
		<div className="search-bar">
		<input value = {this.state.term}
		onChange = {event => this.onSearchChange(event.target.value)} />
		</div>
		);

	}

	onSearchChange(term){

		this.setState({term});
		this.props.onVideoSearch(term);
	}


}


export default SearchBar;