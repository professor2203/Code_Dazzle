// ChatApp.jsx
import React, { useState } from 'react';
import { ChatBot } from 'react-simple-chatbot';
import './ChatApp.css'; // Import any styles if needed

const ChatBots = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  const handleUserName = (name) => {
    setUserName(name);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Welcome to Code Dezzal, ${name}!`, sender: 'bot' },
    ]);
  };

  const handleEmail = (email) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Thank you! We provide services in web development, app development, UI/UX design, and database management for both web and apps.`, sender: 'bot' },
    ]);
  };

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'What is your email?',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Thanks for your email! Here are our services: We provide web development, app development, UI/UX design, and database management.',
      end: true,
    },
  ];

  const onEnd = (result) => {
    // When the chatbot ends, you can handle the result here
  };

  return (
    <div className="chat-app">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === 'bot' ? 'message bot' : 'message user'}>
              {msg.text}
            </div>
          ))}
        </div>
        <ChatBot 
          steps={steps}
          handleEnd={onEnd}
          style={{ position: 'absolute', bottom: '0', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ChatBots;
