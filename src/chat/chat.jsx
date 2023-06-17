import React, { useState } from 'react';
import ChatBox from './chatbox';
import './chat.css'

export function Chat() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <main>
    <div className="chat-page">
      <h1>Welcome to the Chat Page</h1>
      <ChatBox onNewMessage={handleNewMessage} messages={messages} />
    </div>
    </main>
  );
};





