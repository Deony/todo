import React, { Component } from "react";

import './todo-list-item.css';


export default class TodoListItem extends Component {
	constructor() {
		super();
		
		this.state = {
			done: false,
			important: false
		};
		
		this.toggleDone = () => {
			this.setState((state) => {
				return {
					done: !state.done
				}
			})
		};
		
		this.toggleImportant = () => {
			this.setState((state) => {
				return {
					important: !state.important
				}
			})
		};
	}
	
	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state;
		let classNames = 'todo-list-item';
		
		if(done) {
			classNames += ' done';
		}
		
		if(important) {
			classNames += ' important';
		}
		
		return (
			<div className = { classNames }>
				<span className = 'todo-list-item-label'
					  onClick = { this.toggleImportant } >
					{ label }
				</span>
				
				<button className="btn btn-sm btn-outline-danger float-right btn-remove"
						onClick={ onDeleted }>
					<i className="fa fa-trash-o"></i>
				</button>
				
				<button className="btn btn-sm btn-outline-success float-right btn-done"
						onClick = { this.toggleDone } >
					<i className="fa fa-check-circle"></i>
				</button>
			</div>
		)
	}
}