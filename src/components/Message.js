import React from 'react';

class Message extends React.Component {
    

    render() {
        return (
            <li> {this.props.message.subject} </li>
        )
    }
}

export default Message;