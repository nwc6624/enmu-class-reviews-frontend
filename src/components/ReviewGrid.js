import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography, TextField, InputAdornment, Rating } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const ReviewGrid = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/reviews');
        setReviews(response.data);
        setFilteredReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = reviews.filter(review =>
      review.classTitle.toLowerCase().includes(query) ||
      review.instructorName.toLowerCase().includes(query)
    );
    setFilteredReviews(filtered);
  };

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>Class Reviews</Typography>
      <Box my={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search reviews by course name..."
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredReviews.map(review => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Box 
              component={Link} 
              to={`/review/${review.id}`} 
              sx={{ 
                textDecoration: 'none',
                display: 'block',
                borderRadius: '12px',
                padding: '2px',
                background: 'linear-gradient(45deg, #66bb6a, #43a047)',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              <Card 
                sx={{ 
                  borderRadius: '10px',
                  padding: '16px',
                  backgroundColor: '#fff',
                  height: '100%',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="h6" gutterBottom>{review.classTitle}</Typography>
                  <Typography variant="body2" color="textSecondary">Instructor: {review.instructorName}</Typography>
                  <Box display="flex" alignItems="center">
                    <Rating value={review.rating} readOnly />
                    <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                      (Out of 5)
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">Verified student: {review.anonymous ? 'No' : 'Yes'}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewGrid;
