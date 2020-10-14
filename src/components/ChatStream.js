import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  return <section className='chat-stream'>
      {props.messages.map((msg, ind) => {
        // https://reactjs.org/docs/lists-and-keys.html#keys
        //return <div key={`msg-${ind}`}>{msg.body}</div>;
        return <ChatMessage key={`msg-${ind}`} message={msg.body} user={msg.user} messageType={(msg.user.username===props.currentUser.username) ? "sent" : "received"}/>;
      })}
      </section>;
};

export default ChatStream;
