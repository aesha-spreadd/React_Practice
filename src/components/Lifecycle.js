import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      messages: [],
    };
    console.log('1. Constructor');
  }

  componentDidMount() {
    console.log('3. Component Did Mount');
    this.inputRef.focus();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate');
    console.log('Next State:', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate');
    console.log('Previous State:', prevState);
    console.log('Previous Props:', prevProps);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('6. componentDidUpdate');
    console.log('Previous State:', prevState);
    console.log('Previous Props:', prevProps);
    console.log('Snapshot:', snapshot);
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount');
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddMessage = () => {
    this.setState((prevState) => ({
      inputValue: '',
      messages: [...prevState.messages, prevState.inputValue],
    }));
  };

  render() {
    console.log('2. Render');
    return (
      <div>
        <h1>React Lifecycle Example</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => (this.inputRef = input)}
        />
        <button onClick={this.handleAddMessage}>Add Message</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lifecycle;
