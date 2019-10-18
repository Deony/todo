import React from "react";

import './todo-list-item.css';


const TodoListItem = ( {label, important = false} ) => {
	const itemStyle = {
		color: important ? 'tomato' : 'green',
		fontWeight: important ? 'normal' : 'bold'
	};
	return(
		<span style={itemStyle} className='todo-list-item'>
			{ label }
		</span>
	)
};

export default TodoListItem;