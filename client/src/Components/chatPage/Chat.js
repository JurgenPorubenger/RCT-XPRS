import React, { Component, useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

// import TextContainer from '../TextContainer/TextContainer';
// import Messages from '../Messages/Messages';
// import InfoBar from '../InfoBar/InfoBar';
// import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:8080';
  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    socket=io(ENDPOINT);
    setRoom(room);
    setName(name);
    socket.emit('join', {name, room},({err})=>console.log(err));
    console.log(location)
  }, [ENDPOINT,location.search]);
  return (
   <h1>Chat</h1>
  );
};

export default Chat;