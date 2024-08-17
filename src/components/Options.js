import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Box, Paper, Divider, Avatar, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import authService from '../services/authService';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Options = () => {
  const [userData, setUserData] = useState(null);
  const user = authService.getCurrentUser();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/api/user/${user.id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData(); // Call the function once when the component mounts

  }, []); // Empty dependency array ensures this effect runs only once

  const handleDelete = async (type, id) => {
    if (!userData || !userData[type]) {
      console.error(`Invalid type or undefined data for type: ${type}`);
      return;
    }

    try {
      const apiEndpoint = `/api/${type.slice(0, -1)}/${id}`;
      await axios.delete(`http://127.0.0.1:5000${apiEndpoint}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      setUserData(prevUserData => ({
        ...prevUserData,
        [type]: prevUserData[type].filter(item => item.id !== id),
      }));

    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  if (!userData) {
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
      <Container
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '30px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar sx={{ bgcolor: 'green', width: 60, height: 60, marginRight: '20px' }}>
            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
              {userData.username}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              {userData.email}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ marginY: '20px' }} />

        <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Grid item xs={2}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              {userData.reviews.length} total
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              Course Reviews
            </Typography>
          </Grid>
        </Grid>
        <List>
          {userData.reviews.length ? userData.reviews.map(review => (
            <Paper key={review.id} sx={{ marginBottom: '15px', padding: '15px', borderRadius: '10px' }}>
              <ListItem
                sx={{
                  backgroundColor: '#f4f6f8',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              >
                <ListItemText primary={review.classTitle} secondary={review.comment} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('reviews', review.id)}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </ListItem>
            </Paper>
          )) : (
            <Typography align="center" sx={{ marginTop: '20px', color: '#777' }}>
              No course reviews found.
            </Typography>
          )}
        </List>

        <Divider sx={{ marginY: '20px' }} />

        <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Grid item xs={2}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              {userData.posts.length} total
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              Posts
            </Typography>
          </Grid>
        </Grid>
        <List>
          {userData.posts.length ? userData.posts.map(post => (
            <Paper key={post.id} sx={{ marginBottom: '15px', padding: '15px', borderRadius: '10px' }}>
              <ListItem
                sx={{
                  backgroundColor: '#f4f6f8',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              >
                <ListItemText primary={post.title} secondary={post.content} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('posts', post.id)}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </ListItem>
            </Paper>
          )) : (
            <Typography align="center" sx={{ marginTop: '20px', color: '#777' }}>
              No posts found.
            </Typography>
          )}
        </List>

        <Divider sx={{ marginY: '20px' }} />

        <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Grid item xs={2}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              {userData.comments.length} total
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              Comments
            </Typography>
          </Grid>
        </Grid>
        <List>
          {userData.comments.length ? userData.comments.map(comment => (
            <Paper key={comment.id} sx={{ marginBottom: '15px', padding: '15px', borderRadius: '10px' }}>
              <ListItem
                sx={{
                  backgroundColor: '#f4f6f8',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              >
                <ListItemText primary={comment.content} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('comments', comment.id)}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </ListItem>
            </Paper>
          )) : (
            <Typography align="center" sx={{ marginTop: '20px', color: '#777' }}>
              No comments found.
            </Typography>
          )}
        </List>
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

export default Options;

