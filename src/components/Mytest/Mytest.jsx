import { Component } from 'react';

class Mytest extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     text: 'Click Me',
  //   };
  // }

  state = {
    text: 'Click Me',
    value: 0,
  };

  handleClick = event => {
    this.setState({
      text: 'F#ck Me',
    });
  };

  render() {
    const { text, value } = this.state;
    return (
      <div>
        <h2>Hallo World</h2>
        <p onClick={this.handleClick}>{text}</p>
        <p>{value}</p>
      </div>
    );
  }
}

export default Mytest;
