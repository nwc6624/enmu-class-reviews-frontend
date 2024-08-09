import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Rating } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

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
    <Box my={4} sx={{ textAlign: 'center' }}>
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
      <Button variant="contained" color="primary" onClick={() => navigate('/reviews')} sx={{ marginTop: '20px' }}>
        Back to Reviews
      </Button>
    </Box>
  );
};

export default ReviewDetail;
