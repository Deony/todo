import React from "react";

import './app-header.css';


const AppHeader = ({doneCount, todoCount}) => {
	return (
		<div className="app-header">
			<h1>TODO list</h1>
			<div>{todoCount} more to do, {doneCount} have done</div>
		</div>
	)
};

export default AppHeader;