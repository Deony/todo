import React, { Component } from 'react';

import './item-add.form.css';


export default class itemAddForm extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className='item-add-form'>
				<button
					className='btn btn-outline-dark'
					onClick={ () => this.props.onAdded()}>
					Add item
				</button>
			</div>
		)
	}
};