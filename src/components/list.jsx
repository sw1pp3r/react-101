import React from 'react';

class List extends React.Component {
  render() {
    if (this.props.filtered.length > 0) {
      return (
        <ul>
          {this.props.filtered.map((elem) => {
            return <li key={elem}>{elem}</li>;
          })}
        </ul>
      );
    } else {
      return (
        <ul>
          {this.props.list.map((elem) => {
            return <li key={elem}>{elem}</li>;
          })}
        </ul>
      );
    }
  }
}

export default List;
