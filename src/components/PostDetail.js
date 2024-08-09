import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, Typography, TextField, Paper } from '@mui/material';
import authService from '../services/authService';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [message, setMessage] = useState('');
  const user = authService.getCurrentUser();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error.response ? error.response.data : error.message);
      }
    };

    fetchPost();
  }, [id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to post a comment');
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/posts/${id}/comments`, { content: newComment }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setMessage('Comment posted successfully');
      setNewComment('');
      setPost({ ...post, comments: [...post.comments, response.data] });
    } catch (error) {
      console.error('Error posting comment:', error.response ? error.response.data : error.message);
      setMessage('Error posting comment');
    }
  };

  if (!post) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>{post.title}</Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Typography variant="caption" color="textSecondary">
          Posted by {post.anonymous ? 'Anonymous' : post.user_id} on {new Date(post.timestamp).toLocaleString()}
        </Typography>
        <Box my={4}>
          <Typography variant="h6">Comments</Typography>
          {post.comments.map((comment) => (
            <Paper key={comment.id} my={2} p={2} elevation={3} style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant="body1">{comment.content}</Typography>
              <Typography variant="caption" color="textSecondary">
                Posted by {comment.user_id} on {new Date(comment.timestamp).toLocaleString()}
              </Typography>
            </Paper>
          ))}
        </Box>
        {message && <Typography color="error">{message}</Typography>}
        <form onSubmit={handleCommentSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="New Comment"
            value={newComment}
            onChange={handleCommentChange}
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary">Post Comment</Button>
        </form>
      </Box>
    </Container>
  );
};

export default PostDetail;
