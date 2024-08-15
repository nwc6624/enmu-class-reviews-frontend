import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(username, password);
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
        position: 'relative',
      }}
    >
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          {message && <Typography color="error">{message}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
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
          position: 'relative',
        }}
      >
        <Typography variant="body2">
          The official unofficial review page for Eastern New Mexico University. Created by students, for students.
        </Typography>
        <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
          &copy; 2024
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          display: 'flex',
          gap: '20px',
        }}
      >
        <a href="https://www.enmu.edu/" target="_blank" rel="noopener noreferrer">
          <img 
            src={require('../assets/ENMUOldLogo.png')} 
            alt="ENMU Old Logo" 
            style={{ width: '40px', height: '40px' }} 
          />
        </a>
        <a href="https://www.instagram.com/enmu/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
        <a href="https://x.com/enmu" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
        <a href="https://www.facebook.com/goenmu/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
      </Box>
    </Box>
  );
};

export default Login;
