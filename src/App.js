import React from 'react';
import './App.css';
import MouseCursor from './components/mouse-cursor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hover: false};
  }
  
  render() {
    return (
      <div className="App" onClick={() => {this.setState({hover: !this.state.hover}); console.log(this.state.hover)}}>
        <MouseCursor hover={this.state.hover}>
          <h1>Hello World</h1>
        </MouseCursor>
      </div>
    );
  }
}

export default App;
