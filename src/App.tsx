import * as React from 'react';
import MockedText from './MockedText';
import './App.css';

interface State {
  inputText: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<EventTarget>): void {
    const target =  event.target as HTMLInputElement;
    const inputText = target.value;
    this.setState((state, props) => ({ inputText }));
  }

  render() {
    return (
      <div className="App">
        <h1> Mockifier </h1>
        <div className="container">
          <div className="cell one input">
            <textarea onChange={this.handleChange} />
          </div>
          <div className="cell two">
            <MockedText text={this.state.inputText} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
