import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import './App.css';

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    fetch('http://localhost:8082/api/messages')
      .then( data => data.json() )
      .then ( json => this.setState({messages: json}) )
  }

  render() {
    return (
      <div className="container">
        <Toolbar />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
