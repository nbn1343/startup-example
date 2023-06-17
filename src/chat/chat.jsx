import React, { useState } from 'react';
import ChatBox from './ChatBox';
import './chat.css'

export function Chat() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-page">
      <h1>Welcome to the Chat Page</h1>
      <ChatBox onNewMessage={handleNewMessage} messages={messages} />
    </div>
  );
};





