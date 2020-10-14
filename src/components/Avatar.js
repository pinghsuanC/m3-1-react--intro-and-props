import React from 'react';

import './Avatar.css';

const Avatar = ({userName, userAvatar, userSize}) => {
    let sty = {
        width: `${userSize}px`,
        height: `${userSize}px`
    };
    return <img className="user-avatar" src={userAvatar} alt={`${userName}-avatar`} style={{...sty}}/>
};

export default Avatar;
