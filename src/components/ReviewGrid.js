import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography, Modal, Button } from '@mui/material';
import { styled } from '@mui/system';

const ReviewCard = styled(Card)(({ theme }) => ({
  textDecoration: 'none',
  borderRadius: '15px',
  cursor: 'pointer',
  border: '2px solid #1976d2',
  '&:hover': {
    boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.2)',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '15px',
  boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.2)',
}));

const CloseButton = styled(Button)(({ theme }) => ({
  marginTop: '10px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const ReviewGrid = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
  };

  const handleClose = () => {
    setSelectedReview(null);
  };

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>Class Reviews</Typography>
      <Grid container spacing={2}>
        {reviews.map(review => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <ReviewCard onClick={() => handleReviewClick(review)} variant="outlined">
              <CardContent>
                <Typography variant="h5">{review.classTitle}</Typography>
                <Typography>Instructor: {review.instructorName}</Typography>
                <Typography>Rating: {review.rating}</Typography>
              </CardContent>
            </ReviewCard>
          </Grid>
        ))}
      </Grid>

      <Modal open={!!selectedReview} onClose={handleClose}>
        <ModalContent>
          {selectedReview && (
            <>
              <Typography variant="h6" gutterBottom>{selectedReview.classTitle}</Typography>
              <Typography>Instructor: {selectedReview.instructorName}</Typography>
              <Typography>Rating: {selectedReview.rating}</Typography>
              <Typography>Workload: {selectedReview.workload}</Typography>
              <Typography>Teaching Quality: {selectedReview.teachingQuality}</Typography>
              <Typography>Online/In-Person: {selectedReview.onlineOrInPerson}</Typography>
              <Typography>Comment: {selectedReview.comment}</Typography>
              <CloseButton onClick={handleClose} variant="contained" color="primary">
                Close
              </CloseButton>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ReviewGrid;
