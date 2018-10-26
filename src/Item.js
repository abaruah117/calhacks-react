import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
    	<div className="todo-item-container">
    		<li className="todo-item"> {this.props.text} </li>
    	</div>
    );
  }
}

export default Item;
