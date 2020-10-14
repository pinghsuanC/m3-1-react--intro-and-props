import React from 'react';

import './Header.css';
import Avatar from './Avatar.js';

const Header = (props) => {
  //console.log(props.currentUser);
  return <header>{
    (props.participants.filter((ele)=>{
      return ele!==props.currentUser;
    })).map((ele)=>{
      return <div key={`header-${ele.username}`} className="header-wrapper">
          <Avatar userName={ele.uesrname} userAvatar={ele.avatar} userSize={45}/>
          <div className="header-user-name">{ele.username}</div>
      </div>
    })
    }</header>;
};

export default Header;
