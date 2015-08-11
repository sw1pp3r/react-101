import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'filter2',
    };
  }

  render() {
    return (
      <input type="text" placeholder={this.state.placeholder} onChange={this.props.handleChange} />
    );
  }
}

export default Filter;
