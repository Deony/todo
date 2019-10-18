import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header/app-header";
import TodoList from "./components/todo-list/todo-list";
import SearchPanel from "./components/search-panel/search-panel";

import './index.css';


const App = () => {
	const todoData = [
		{ id: 1, label: 'Drink Coffee' },
		{ id: 2, label: 'Drink Tea', important: true },
		{ id: 3, label: 'Drink Juice', important: true },
	];
	
	return (
		<div className = 'todo-app'>
			
			<AppHeader/>
			
			<div className="top-panel d-flex">
				<SearchPanel/>
			</div>
			
			<TodoList todoData = {todoData} />
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));
