import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ReviewGrid = () => {
  const [reviews, setReviews] = useState([]);

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

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>Class Reviews</Typography>
      <Grid container spacing={2}>
        {reviews.map(review => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card component={Link} to={`/review/${review.id}`} variant="outlined" sx={{ textDecoration: 'none' }}>
              <CardContent>
                <Typography variant="h5">{review.classTitle}</Typography>
                <Typography>Instructor: {review.instructorName}</Typography>
                <Typography>Rating: {review.rating}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewGrid;
