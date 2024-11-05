import React, { useState } from "react";
import Chatbot from "react-simple-chatbot";
import { Container, Typography, Paper, IconButton } from "@mui/material";

const MyChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleLogoClick = () => {
    setShowChatbot(true);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      {/* Logo Section */}
      {!showChatbot ? (
        <IconButton onClick={handleLogoClick}>
          <img src="./logo.png" alt="Logo" style={{ cursor: 'pointer', width: '100px' }} /> {/* Adjust width as needed */}
        </IconButton>
      ) : (
        <Paper elevation={3} style={{ padding: '2rem', marginTop: '1rem' }}>
          <Typography variant="h5" gutterBottom align="center">
            Welcome to Our Service
          </Typography>
          <Chatbot
            steps={[
              {
                id: "greet",
                message: "Hello! What's your name?",
                trigger: "name",
              },
              {
                id: "name",
                user: true,
                trigger: "askEmail",
              },
              {
                id: "askEmail",
                message: "Nice to meet you, {previousValue}! What is your email?",
                trigger: "email",
              },
              {
                id: "email",
                user: true,
                trigger: "askServices",
              },
              {
                id: "askServices",
                message: "Thank you! Which software house services are you interested in? (e.g., Web Development, App Development, AI Solutions)",
                trigger: "services",
              },
              {
                id: "services",
                user: true,
                trigger: "thankYou",
              },
              {
                id: "thankYou",
                message: "Thank you for your interest! We'll get back to you soon.",
                end: true,
              },
            ]}
          />
        </Paper>
      )}
    </Container>
  );
};

export default MyChatbot;
