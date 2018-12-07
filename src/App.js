import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    fetch('http://localhost:8082/api/messages')
      .then( res => res.json() )
      // .then ( json => this.setState({messages: json}) )
      .then ( data => {
        // add a 'selected' attribute to every message and initialize
        data.map( message => message.selected=false );
        this.setState({messages: data})
      })
  }

  toggleSelect = (message, key) => {
    this.setState(state => ({
      messages: state.messages.reduce( (acc, cv) => {
        // reduce will pass all elements through, only modifying the desired element's state
        if (cv.id === message.id) {
          cv[key] = !cv[key];
        }
        return [...acc, cv]
      }, [])
    }))
  }

  render() {
    
    return (
      <div className="container">
        <Toolbar />
        <MessageList messages={this.state.messages} toggleSelect={this.toggleSelect} />
      </div>
    );
  }
}

export default App;
