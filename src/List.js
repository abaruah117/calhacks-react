import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_item: "",
      items: []
    };
    this.handleItem = this.handleItem.bind(this);
    this.createList = this.createList.bind(this);
  }
  handleItem(event) {
    this.setState({
      curr_item: event.target.value
    });
  }
  createList(event) {
    event.preventDefault()
    this.setState({
      curr_item: "",
      items: [...this.state.items, this.state.curr_item]
    });
  }
  render() {
    return (
      <div className="todoList">
        <ul>
          {this.state.items.map((item, index) => (
            <Item key={index} text={item} />
          ))}
        </ul>
        <form className="App" onSubmit={this.createList}>
         <input value={this.state.curr_item} onChange={this.handleItem} />
         <button>Submit</button>
       </form>
      </div>
    );
  }
}

export default List;
