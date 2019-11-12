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
			],
			term: '',
			filter: 'all'
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
			if(text.length === 0) { // check if the input value is empty
				return false;
			} else {
				const newItem = this.createNewItem(text);
				this.setState(( {todoData} ) => {
					const newData = todoData.concat(newItem);
					
					return {
						todoData: newData
					}
				})
			}
		};
		
		this.toggleMethod = (data, id, propName) => {
			const index = data.findIndex(el => el.id === id);
			const oldItem = data[index];
			const newItem = {...oldItem, [propName]: !oldItem[propName]};
			
			return [...data.slice(0, index), newItem, ...data.slice(index + 1)];
		};
		
		this.toggleDone = (id) => {
			this.setState(({todoData}) => {
				return {
					todoData: this.toggleMethod(todoData, id, 'done')
				};
			});
		};
	
		this.toggleImportant = (id) => {
			this.setState(({todoData}) => {
				return {
					todoData: this.toggleMethod(todoData, id, 'important')
				};
			});
		};
		
		this.searchItems = (items, term) => {
			if(term.length === 0) {
				return items;
			} else {
				return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
			}
		};
		
		this.filter = (items, filter) => {
			switch (filter) {
				case 'all':
					return items;
				case 'active':
					items.filter(item => !item.done);
					return items.filter(item => !item.done);
				case 'done':
					return items.filter(item => item.done);
				default:
					return items;
			}
		};
		
		this.onSearchChange = (term) => {
			this.setState({term});
		};
		
		this.onFilterChange = (filter) => {
			this.setState({filter});
		};
	}
	
	render() {
		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter( this.searchItems(todoData, term), filter );
		
		const doneCount = todoData.filter( el => {
			return el.done
		}).length;
		
		const todoCount = todoData.length - doneCount;
		
		return (
			<div className = 'todo-app'>
				
				<AppHeader doneCount={ doneCount } todoCount={ todoCount }/>
				
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
				</div>
				
				<TodoList
					todoData={ todoData }
					items={ visibleItems }
					onDeleted={ this.deleteItem }
					toggleDone={ this.toggleDone }
					toggleImportant={ this.toggleImportant }/>
					
				<ItemAddForm onAdded = {this.addItem} />
			</div>
		)
	}
};