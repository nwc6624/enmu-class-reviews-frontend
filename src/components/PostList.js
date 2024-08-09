import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.response ? error.response.data : error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Posts</Typography>
        <Box my={4}>
          {posts.map((post) => (
            <Paper key={post.id} my={2} p={2} elevation={3} style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body1">{post.content}</Typography>
              <Typography variant="caption" color="textSecondary">
                Posted by {post.anonymous ? 'Anonymous' : post.user_id} on {new Date(post.timestamp).toLocaleString()}
              </Typography>
              <Button variant="contained" color="primary" component={Link} to={`/posts/${post.id}`} style={{ marginTop: '10px' }}>
                View Comments
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PostList;
