import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
class App extends Component {
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
  createList() {
    this.setState({
      curr_item: "",
      items: this.state.items.concat(this.state.curr_item)
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
         <input value={this.state.curr_item} onChange={this.handleItem} />
         <button onClick={this.createList}>Submit</button>
      </div>
    );
  }
}

export default App;
