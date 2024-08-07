import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import authService from '../services/authService';

const Options = () => {
  const [userData, setUserData] = useState(null);
  const user = authService.getCurrentUser();

  useEffect(() => {
    if (!user) {
      console.error('User not found in local storage');
      return;
    }
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/user/${user.id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/${type}/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setUserData({
        ...userData,
        [type]: userData[type].filter(item => item.id !== id),
      });
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Options</Typography>
      <Typography variant="h6">Username: {userData.username}</Typography>
      <Typography variant="h6">Email: {userData.email}</Typography>

      <Typography variant="h5" gutterBottom>Course Reviews</Typography>
      <List>
        {userData.reviews.map(review => (
          <ListItem key={review.id}>
            <ListItemText primary={review.classTitle} secondary={review.comment} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('review', review.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom>Posts</Typography>
      <List>
        {userData.posts.map(post => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.content} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('post', post.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom>Comments</Typography>
      <List>
        {userData.comments.map(comment => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.content} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete('comment', comment.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Options;
