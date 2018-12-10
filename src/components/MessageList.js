import React from 'react';
import Message from './Message'

const MessageList = ({messages, toggleSelect, toggleStarred}) => {
    let messageList = messages.map( message => <Message key={message.id} message={message} toggleSelect={toggleSelect} toggleStarred={toggleStarred} /> );

    return (
        <ul>
            {messageList}
        </ul>
    )
}

export default MessageList;