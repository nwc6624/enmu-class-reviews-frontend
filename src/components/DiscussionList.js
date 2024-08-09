import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Typography, Paper, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:5000/api';

const DiscussionList = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get(`${API_URL}/discussions`);
        setDiscussions(response.data);
      } catch (error) {
        console.error('Error fetching discussions:', error.response ? error.response.data : error.message);
      }
    };

    fetchDiscussions();
  }, []);

  const handleCreateDiscussion = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.post(
        `${API_URL}/discussions`,
        { topic: newDiscussion, content: newContent },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setNewDiscussion('');
      setNewContent('');
      const response = await axios.get(`${API_URL}/discussions`);
      setDiscussions(response.data);
    } catch (error) {
      console.error('Error creating discussion:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Discussions</Typography>
        <Box my={4}>
          <TextField
            label="Discussion Topic"
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" onClick={handleCreateDiscussion}>
            Post Discussion
          </Button>
        </Box>
        <Box my={4}>
          {discussions.map((discussion) => (
            <Paper key={discussion.id} elevation={3} style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant="h6">{discussion.topic}</Typography>
              <Typography variant="body1" color="textSecondary" style={{ marginBottom: '8px' }}>
                {discussion.content}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Posted by {discussion.username} on {new Date(discussion.timestamp).toLocaleString()}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/discussion/${discussion.id}`}
                style={{ marginTop: '10px' }}
              >
                View Full Discussion
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default DiscussionList;
