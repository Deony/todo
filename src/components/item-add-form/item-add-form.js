import React, { Component } from 'react';

import './item-add.form.css';


export default class itemAddForm extends Component {
	constructor() {
		super();
		
		this.state = {
			label: ''
		};
		
		this.onLabelChange = (e) => {
			this.setState({
				label: e.target.value
			})
		};
		
		this.onSubmit = (event) => {
			event.preventDefault();
			this.props.onAdded(this.state.label);
			this.setState({
				label: ''
			})
		}
	}
	
	render() {
		return (
			<form className='item-add-form d-flex'
					onSubmit={this.onSubmit}>
				<input type="text"
						className='form-control'
						onChange={this.onLabelChange}
						placeholder='Type the task'
						value={this.state.label}/>
				<button className='btn btn-outline-dark'>
					Add item
				</button>
			</form>
		)
	}
};