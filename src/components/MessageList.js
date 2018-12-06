import React from 'react';
import Message from './Message'

const MessageList = ({messages}) => {
    let messageList = messages.map( message => <Message message={message} /> );

    return (
        <ul>
            {messageList}
        </ul>
    )
}

export default MessageList;