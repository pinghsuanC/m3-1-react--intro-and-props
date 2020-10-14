import React from 'react';
import "./ChatMessage.css";
import Avatar from "./Avatar.js"



const SentMessage = ({message}) => {
    return <>
            
            <div className="msg-sent chat-message">{message}
            <img className="bubble-sent" src="/assets/tip-sent.svg"/>
            </div>
            </>
}
const ReceivedMessage = ({message}) => {
    return <>
    
        <div className='msg-received chat-message'>
                <img className="bubble-received" src="/assets/tip-received.svg"/>
                {message}        
        </div>
        </>
}

const ChatMessage = ({message, user, messageType}) => {

    if (messageType === 'sent') {
        return <>
                <SentMessage message={message} />
                
            </>;
    } else {
        return <>
                <div className="user-name received">{user.username}</div>
                <div className="inner-wrap">
                <Avatar userName={user.username} userAvatar={user.avatar} userSize={45} />
                {/*<img className="user-avatar received" alt={user.username+"-avatar"} src={user.avatar}/>*/}
                <ReceivedMessage message={message} />
                
                </div>
            </>;
    }
    //console.log(props);
}


export default ChatMessage;