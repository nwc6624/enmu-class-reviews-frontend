import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState(''); // Ensure using username
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(username, password); // Ensure using username
      if (response.access_token) {
        setMessage('Login successful');
        navigate('/');
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Invalid credentials');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        {message && <Typography color="error">{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username" // Ensure using username
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
