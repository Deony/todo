import React, { Component } from "react";

import './todo-list-item.css';


const TodoListItem = (props) => {
	const { label, onDeleted, done, important, toggleDone, toggleImportant } = props;

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
				  onClick = { toggleImportant } >
				{ label }
			</span>
			
			<button className="btn btn-sm btn-outline-danger float-right btn-remove"
					onClick={ onDeleted }>
				<i className="fa fa-trash-o"></i>
			</button>
			
			<button className="btn btn-sm btn-outline-success float-right btn-done"
					onClick = { toggleDone } >
				<i className="fa fa-check-circle"></i>
			</button>
		</div>
	)
};

export default TodoListItem;