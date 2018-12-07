import React from 'react';
import Message from './Message'

const MessageList = ({messages, toggleSelect}) => {
    let messageList = messages.map( message => <Message key={message.id} message={message} toggleSelect={toggleSelect}/> );

    return (
        <ul>
            {messageList}
        </ul>
    )
}

export default MessageList;