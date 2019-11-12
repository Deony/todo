import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';


const TodoList = ( {items, onDeleted:onDeleteItem, toggleDone, toggleImportant} ) => {

	const elements = items.map( (item) => {
		const { id, ...itemProps } = item;
		
		return (
			<li key = {id} className='list-group-item'>
				<TodoListItem { ...itemProps }
							  onDeleted={ () => { onDeleteItem(id) } }
							  toggleDone={ () => { toggleDone(id) } }
							  toggleImportant={ () => { toggleImportant(id) } }  />
			</li>
		)
	});
	
	return (
		<ul className='list-group todo-list'>
			{ elements }
		</ul>
	)
};


export default TodoList;