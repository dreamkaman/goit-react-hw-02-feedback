import { Component } from 'react';
import Subparagraph from './Subparagraph';

class Mytest extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     text: 'Click Me',
  //   };
  // }
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    text: 'Click Me',
    value: this.props.initialValue,
  };

  handleClick = event => {
    this.setState(prestate => {
      return {
        value: prestate.value + 1,
        text: 'Trill Me',
      };
    });
  };

  render() {
    const { text, value } = this.state;
    return (
      <div>
        <h2>Hallo World</h2>
        <Subparagraph onParagraphClick={this.handleClick} text={text} />
        <p>{value}</p>
      </div>
    );
  }
}

export default Mytest;
