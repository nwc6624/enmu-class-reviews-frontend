import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const DiscussionDetail = () => {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/discussions/${id}`);
        setDiscussion(response.data);
      } catch (error) {
        console.error('Error fetching discussion:', error);
      }
    };

    fetchDiscussion();
  }, [id]);

  if (!discussion) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="80vh" 
      my={4}
    >
      <Card 
        sx={{
          maxWidth: 800,
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #e0f7fa, #e1bee7)',
          padding: '24px',
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            {discussion.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {discussion.content}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Posted by: {discussion.author} | Date: {new Date(discussion.datePosted).toLocaleDateString()}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate(-1)}
            sx={{ mt: 4, borderRadius: '24px' }}
          >
            Back to Discussions
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DiscussionDetail;
