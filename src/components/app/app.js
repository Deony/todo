import React from 'react';

import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import './app.css'


const App = () => {
	const todoData = [
		{ id: 1, label: 'Drink Coffee' },
		{ id: 2, label: 'Drink Tea' },
		{ id: 3, label: 'Drink Juice' }
	];
	
	return (
		<div className = 'todo-app'>
			
			<AppHeader/>
			
			<div className="top-panel d-flex">
				<SearchPanel/>
				<ItemStatusFilter/>
			</div>
			
			<TodoList todoData = {todoData} />
		</div>
	)
};

export default App;