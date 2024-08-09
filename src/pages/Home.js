import React from 'react';
import { Typography, Box } from '@mui/material';
import ReviewGrid from '../components/ReviewGrid';

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to ENMU Class Reviews
      </Typography>
      <Typography variant="body1">
        Please log in or sign up to start reviewing classes and participating in discussions.
      </Typography>
      <ReviewGrid />
    </Box>
  );
};

export default Home;
