import React, { Component } from 'react';

import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import './app.css'


export default class App extends Component{
	constructor() {
		super();
		
		this.state = {
			todoData: [
				{ id: 1, label: 'Drink Coffee' },
				{ id: 2, label: 'Drink Tea' },
				{ id: 3, label: 'Drink Juice' }
			]
		}
	}
	
	deleteItem = (id) => {
		this.setState( ({todoData}) => {
			const index = todoData.findIndex( (el) => el.id === id ); // return index of deleted element
		
			const newData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
			
			return {
				todoData: newData
			}
		})
	};
	
	render() {
		return (
			<div className = 'todo-app'>
				
				<AppHeader/>
				
				<div className="top-panel d-flex">
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				
				<TodoList
					todoData = {this.state.todoData}
					onDeleted = { this.deleteItem } />
			</div>
		)
	}
};