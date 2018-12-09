import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';

class App extends Component {
  state = {
    messages: [],
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

  patch = (messages, command, cmd) => {
    // how can I handle conditionally attaching a key to the data object more intelligently?
    const data = {
      messageIds: messages.map(message => message.id),
      command: command,
      read: cmd,
      label: cmd
    }
    
    return fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  toggleSelect = (message, key) => {
    
    this.setState(state => ({
      messages: state.messages.reduce( (acc, cv) => {
        // reduce will pass all elements through, only modifying the desired element's state
        if (cv.id === message.id) {
          cv[key] = !cv[key];
        }
        return [...acc, cv];
      }, [])
    }))
  }

  setReadStatus = (status) => {
    const messages = this.state.messages.filter(message => message.selected)
    this.patch(messages, 'read', status)
      .then((res) => {
        this.setState({
          messages: res
        })
      })
    // this.setState(state => ({
    //   messages: state.messages.reduce( (acc, cv) => {
    //     if (cv.selected) {
    //       cv.read = status;
    //     }
    //     return [...acc, cv];
    //   }, [])
    // }))
  }

  selectAll = (status) => {
    this.setState(state => ({
      messages: state.messages.reduce( (acc, cv) => {
        // reduce will apply status to all messages state.messages array
        cv.selected = status;
        return [...acc, cv]
      }, [])
    }))
  }

  setLabel = (action, label) => {
    const messages = this.state.messages.filter(message => message.selected)
    this.patch(messages, action, label)
      .then((res) => {
        this.setState({
          messages: res
        })
      })
    // this.setState(state => ({
    //   messages: state.messages.reduce( (acc, cv) => {
    //     if (cv.selected) {
    //       if (action==="apply") {
    //         // if the label exists don't add it again dingus!
    //         cv.labels = cv.labels.includes(label) ? cv.labels : [...cv.labels, label]
    //       } else if (action==="remove") {
    //         // remove label from existing array of labels
    //         cv.labels = cv.labels.filter(val => val !== label)
    //       };
    //     }
    //     return [...acc, cv]
    //   }, [])
    // }))
  }

  deleteMessage = () => {
    const messages = this.state.messages.filter(message => message.selected)
    this.patch(messages, 'delete')
      .then( (res) => {
        this.setState({
          messages: res
        })
      })
    // this.setState({
    //   messages: this.state.messages.filter(message => !message.selected)
    // })
  }

  render() {
    
    return (
      <div className="container">
        <Toolbar messages={this.state.messages} setReadStatus={this.setReadStatus} selectAll={this.selectAll} setLabel={this.setLabel} deleteMessage={this.deleteMessage} />
        <MessageList messages={this.state.messages} toggleSelect={this.toggleSelect} />
      </div>
    );
  }
}

export default App;