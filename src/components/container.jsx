import React from 'react';
import List from './list';
import Filter from './filter';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['banana', 'orange', 'apple', 'ananas', 'water'],
      filtered: [],
    };
  }

  render() {
    return (
      <div>
        <Filter handleChange={this.filterProducts.bind(this)} />
        <List list={this.state.list} filtered={this.state.filtered} />
      </div>
    );
  }

  filterProducts(e) {
    const value = e.target.value;

    const filtered = this.state.list.filter((elem) => {
      return elem.indexOf(value) !== -1;
    });

    this.setState({ filtered: filtered });
  }
}

export default Container;
