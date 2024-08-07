import React, { useState } from 'react';
import authService from '../services/authService';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(user.username, user.email, user.password);
      setMessage('User registered successfully');
      navigate('/login');
    } catch (error) {
      console.error(error);
      setMessage('Error registering user');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        {message && <Typography color="error">{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">Sign Up</Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
