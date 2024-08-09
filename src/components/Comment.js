import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';

const API_URL = 'http://127.0.0.1:5000/api';

const Comment = ({ comment }) => {
  const [newComment, setNewComment] = useState('');
  const [nestedComments, setNestedComments] = useState(comment.comments || []);

  const handleCreateComment = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios.post(
        `${API_URL}/comments`,
        { content: newComment, discussion_id: comment.discussion_id, post_id: comment.id },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setNestedComments([...nestedComments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error creating comment:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box mt={1} pl={2} borderLeft={1} borderColor="grey.300">
      <Typography variant="body2">{comment.content}</Typography>
      <Typography variant="caption">
        Comment by: {comment.username} on {new Date(comment.timestamp).toLocaleString()}
      </Typography>
      {nestedComments.map((nestedComment) => (
        <Comment key={nestedComment.id} comment={nestedComment} />
      ))}
      <TextField
        label="New Comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        fullWidth
      />
      <Button onClick={handleCreateComment} variant="contained" color="primary">
        Reply
      </Button>
    </Box>
  );
};

export default Comment;
