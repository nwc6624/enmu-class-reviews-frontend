import React from 'react';
import { Typography, Box } from '@mui/material';
import ReviewGrid from '../components/ReviewGrid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Home = () => {
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
      <Box>
        <Typography variant="h4" gutterBottom>
          Welcome to ENMU Class Reviews
        </Typography>
        <Typography variant="body1">
          Please log in or sign up to start reviewing classes and participating in discussions.
        </Typography>
        <ReviewGrid />
      </Box>
      
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

export default Home;

