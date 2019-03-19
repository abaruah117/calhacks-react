// @format
import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleDone = this.toggleDone.bind(this);
  }
  toggleDone() {}
  render() {
    return (
      <div>
        <li onClick={this.toggleDone}>{this.props.text}</li>
      </div>
    );
  }
}

export default Item;
