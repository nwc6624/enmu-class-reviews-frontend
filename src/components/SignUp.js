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
    <Box
      sx={{
        backgroundImage: `url(${require('../assets/ENMU_Mascot_Logo_Cornered.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="sm">
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
            <Box 
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '10px',
                padding: '10px',
                marginBottom: '16px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Note: Only accounts registered with an @enmu.edu email address will be considered a verified account for reviews.
              </Typography>
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
      
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          marginTop: 'auto',
          marginBottom: '20px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          The official unofficial review page for Eastern New Mexico University. Created by students, for students.
        </Typography>
        <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
          &copy; 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
