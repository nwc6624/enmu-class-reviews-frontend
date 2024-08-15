import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
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
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            fontWeight: 'bold',
            color: '#2E3B55', 
            borderBottom: '3px solid #2E3B55',
            display: 'inline-block',
            paddingBottom: '10px',
            marginBottom: '20px',
          }}
        >
          About ENMU Class Reviews
        </Typography>
        <Typography variant="body1" paragraph>
          Eastern New Mexico University (ENMU) is a public university with its main campus in Portales, New Mexico, and two additional campuses in Ruidoso and Roswell. Established in 1934, ENMU is the largest regional comprehensive university in New Mexico and serves a diverse student body as a federally designated Hispanic-serving institution.
        </Typography>
        <Typography variant="body1" paragraph>
          This platform allows students to share reviews and participate in discussions about their classes, helping to create a community-driven resource for current and future students of ENMU.
        </Typography>
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

export default About;
