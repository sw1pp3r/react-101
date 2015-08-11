import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default Counter;
