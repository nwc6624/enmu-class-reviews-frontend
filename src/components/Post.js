import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField, Typography, Checkbox } from '@mui/material';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [review, setReview] = useState({
    classTitle: '',
    instructorName: '',
    semester: '',
    rating: 0,
    workload: '',
    teachingQuality: 0,
    onlineOrInPerson: '',
    comment: '',
    anonymous: false,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (e, newValue) => {
    setReview({ ...review, rating: newValue });
  };

  const handleTeachingQualityChange = (e, newValue) => {
    setReview({ ...review, teachingQuality: newValue });
  };

  const handleWorkloadChange = (e) => {
    setReview({ ...review, workload: e.target.value });
  };

  const handleOnlineOrInPersonChange = (e) => {
    setReview({ ...review, onlineOrInPerson: e.target.value });
  };

  const handleAnonymousChange = (e) => {
    setReview({ ...review, anonymous: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = authService.getCurrentUser();
    if (!user) {
      alert('Please log in to submit a review');
      navigate('/login');
      return;
    }

    try {
      console.log('Review data being sent:', review);
      const response = await axios.post('http://127.0.0.1:5000/api/reviews', review, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setMessage('Review submitted successfully');
      setReview({
        classTitle: '',
        instructorName: '',
        semester: '',
        rating: 0,
        workload: '',
        teachingQuality: 0,
        onlineOrInPerson: '',
        comment: '',
        anonymous: false,
      });
      console.log('Review submitted:', response.data);
    } catch (error) {
      console.error('Error submitting review:', error.response ? error.response.data : error.message);
      setMessage('Error submitting review');
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
          <Typography variant="h4" gutterBottom>Post a Review</Typography>
          {message && <Typography color="error">{message}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Class Title"
              name="classTitle"
              value={review.classTitle}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontWeight: 'bold' } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Instructor Name (Or N/A if not sure)"
              name="instructorName"
              value={review.instructorName}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontWeight: 'bold' } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Semester Taken"
              name="semester"
              value={review.semester}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { fontWeight: 'bold' } }}
            />
            <Box my={2}>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Rating</FormLabel>
              <Rating
                name="rating"
                value={review.rating}
                onChange={handleRatingChange}
                required
              />
            </Box>
            <Box my={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Workload</FormLabel>
                <RadioGroup row name="workload" value={review.workload} onChange={handleWorkloadChange}>
                  <FormControlLabel value="light" control={<Radio sx={{ color: 'green' }} />} label="Light" />
                  <FormControlLabel value="moderate" control={<Radio sx={{ color: 'yellow' }} />} label="Moderate" />
                  <FormControlLabel value="heavy" control={<Radio sx={{ color: 'red' }} />} label="Heavy" />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box my={2}>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Teaching Quality</FormLabel>
              <Rating
                name="teachingQuality"
                value={review.teachingQuality}
                onChange={handleTeachingQualityChange}
                required
              />
            </Box>
            <Box my={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Online or In-Person</FormLabel>
                <RadioGroup row name="onlineOrInPerson" value={review.onlineOrInPerson} onChange={handleOnlineOrInPersonChange}>
                  <FormControlLabel value="online" control={<Radio />} label="Online" />
                  <FormControlLabel value="in-person" control={<Radio />} label="In-Person" />
                </RadioGroup>
              </FormControl>
            </Box>
            <TextField
              fullWidth
              margin="normal"
              label="Comment (120 characters max)"
              name="comment"
              value={review.comment}
              onChange={handleChange}
              inputProps={{ maxLength: 120 }}
              required
              InputLabelProps={{ style: { fontWeight: 'bold' } }}
            />
            <FormControlLabel
              control={<Checkbox checked={review.anonymous} onChange={handleAnonymousChange} />}
              label="Post Anonymously"
              sx={{ fontWeight: 'bold' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ fontWeight: 'bold' }}>
              Submit Review
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

export default Post;

