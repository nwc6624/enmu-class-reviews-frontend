import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Rating } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ReviewDetail = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/reviews/${id}`);
        setReview(response.data);
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    };

    fetchReview();
  }, [id]);

  const getWorkloadStyle = (workload) => {
    switch (workload.toLowerCase()) {
      case 'light':
        return { color: 'green' };
      case 'moderate':
        return { color: 'yellow', textShadow: '1px 1px 2px black' };
      case 'heavy':
        return { color: 'red', textShadow: '1px 1px 2px black' };
      default:
        return { color: 'gray', textShadow: '1px 1px 2px black' };
    }
  };

  if (!review) {
    return <Typography>Loading...</Typography>;
  }

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
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>{review.classTitle}</Typography>
        <Typography variant="h6">Instructor: {review.instructorName}</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <Rating value={review.rating} readOnly />
          <Typography variant="body1" sx={{ marginLeft: '8px' }}>(Out of 5)</Typography>
        </Box>
        <Typography variant="body1">Semester: {review.semester}</Typography>
        <Typography variant="body1" sx={{ ...getWorkloadStyle(review.workload), fontWeight: 'bold' }}>
          Workload: {review.workload}
        </Typography>
        <Typography variant="body1">Teaching Quality: {review.teachingQuality}</Typography>
        <Typography variant="body1">Mode: {review.onlineOrInPerson}</Typography>
        <Typography variant="body1">Comment: {review.comment}</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => {
            navigate('/');
            window.location.reload(); // Ensure the page refreshes when navigating back
          }} 
          sx={{ marginTop: '20px' }}
        >
          Return to Reviews
        </Button>
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

export default ReviewDetail;
