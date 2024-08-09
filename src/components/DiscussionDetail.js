import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Typography, Paper, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const API_URL = 'http://127.0.0.1:5000/api';

const DiscussionDetail = () => {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await axios.get(`${API_URL}/discussions/${id}`);
        setDiscussion(response.data);
      } catch (error) {
        console.error('Error fetching discussion:', error.response ? error.response.data : error.message);
      }
    };

    fetchDiscussion();
  }, [id]);

  const handleCreateComment = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.post(
        `${API_URL}/discussions/${id}/comments`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setNewComment('');
      const response = await axios.get(`${API_URL}/discussions/${id}`);
      setDiscussion(response.data);
    } catch (error) {
      console.error('Error creating comment:', error.response ? error.response.data : error.message);
    }
  };

  if (!discussion) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>{discussion.topic}</Typography>
        <Paper my={2} p={2} elevation={3} style={{ padding: '16px' }}>
          <Typography variant="body1">{discussion.content}</Typography>
          <Typography variant="caption" color="textSecondary">
            Posted by {discussion.username} on {new Date(discussion.timestamp).toLocaleString()}
          </Typography>
        </Paper>
        <Box my={4}>
          <Typography variant="h5">Comments</Typography>
          {discussion.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <TextField
            label="New Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleCreateComment}>
            Post Comment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DiscussionDetail;
