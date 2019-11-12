import React, { Component } from "react";

export default class SearchPanel extends Component {
	constructor(props) {
		super();
		
		this.state = {
			term: ''
		};
		
		this.onTermChange = (e) => {
			const { onSearchChange } = this.props;
			const term = e.target.value;
			
			this.setState({
				term: e.target.value
			});
			onSearchChange(term);
		}
	}
	
	render() {
		return (
			<input type="text"
				   placeholder='Type to search'
				   className='form-control search-input'
				   value={this.state.term}
				   onChange={this.onTermChange}/>
		)
	}
}