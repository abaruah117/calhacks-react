// @format
import React, {Component} from 'react';
import './App.css';
import Item from './Item';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  handleInputChange(event) {}

  updateColor(newColor) {
    this.setState({
      color: newColor,
    });
  }

  addItem() {}

  render() {
    return (
      <div className="todo-container">
        <div className="input-container">
          <input
            className="todo-input"
            placeholder="New Item"
            onChange={this.handleInputChange}
          />
          <button className="todo-submit" onClick={this.addItem}>
            Submit
          </button>
        </div>
        <ul className="todo-item-list" />
        <div>
          <button
            className="button-color"
            onClick={() => this.updateColor('#FF0000')}
          />
          <button
            className="button-color"
            onClick={() => this.updateColor('#00FF00')}
          />
          <button
            className="button-color"
            onClick={() => this.updateColor('#0000FF')}>
            Hello
          </button>
        </div>
      </div>
    );
  }
}

export default App;
