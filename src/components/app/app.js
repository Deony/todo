import React, { Component } from 'react';

import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css'


export default class App extends Component{
	constructor() {
		super();
		
		this.maxId = 100;
		
		this.createNewItem = (label) => {
			return {
				id: this.maxId++,
				label: label,
				done: false,
				important: false
			}
		};
		
		this.state = {
			todoData: [
				this.createNewItem('Drink Coffee'),
				this.createNewItem('Drink Tea'),
				this.createNewItem('Drink Juice')
			]
		};
		
		this.deleteItem = (id) => {
			this.setState( ({todoData}) => {
				const index = todoData.findIndex( (el) => el.id === id ); // return index of deleted element
				
				const newData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
				
				return {
					todoData: newData
				}
			})
		};
	
		this.addItem = (text) => {
			const newItem = this.createNewItem('Drink smth');
			
			this.setState(( {todoData} ) => {
				const newData = todoData.concat(newItem);
				
				return {
					todoData: newData
				}
			})
		};
	
		this.toggleDone = (id) => {
			this.setState(({todoData, done}) => {
				const index = todoData.findIndex( el => el.id === id );
				const oldItem = todoData[index];
				const newItem = { ...oldItem, done: !oldItem.done };
				
				const newData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
				
				return {
					todoData: newData
				}
			})
		};
	
		this.toggleImportant = (id) => {
			this.setState(({todoData}) => {
				const index = todoData.findIndex( el => el.id === id);
				const oldItem = todoData[index];
				const newItem = { ...oldItem, important: !oldItem.important};
				
				const newData = [...todoData.slice(0,index), newItem, ...todoData.slice(index + 1)];
				
				return {
					todoData: newData
				}
			})
		};
	}
	
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
					onDeleted = {this.deleteItem}
					toggleDone = {this.toggleDone}
					toggleImportant = {this.toggleImportant}/>
					
				<ItemAddForm onAdded = {this.addItem} />
			</div>
		)
	}
};