import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authService from '../services/authService';
import './styles.css';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get(`${API_URL}/discussions`, {
          headers: {
            'Accept': 'application/json',  // Explicitly specify the accepted response format
          }
        });
        setDiscussions(response.data);
      } catch (error) {
        console.error('Error fetching discussions:', error.response ? error.response.data : error.message);
      }
    };
  
    fetchDiscussions();
  }, []);
  

    fetchDiscussions();
  }, []);

  const handleDiscussionChange = (e) => {
    setNewDiscussion({ ...newDiscussion, [e.target.name]: e.target.value });
  };

  const handleDiscussionSubmit = async (e) => {
    e.preventDefault();
    const user = authService.getCurrentUser();
    if (!user) {
      alert('Please log in to create a discussion');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/discussions', { ...newDiscussion, user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setDiscussions([...discussions, response.data.discussion]);
      setNewDiscussion({ title: '', content: '' });
    } catch (error) {
      console.error('Error creating discussion:', error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const user = authService.getCurrentUser();
    if (!user) {
      alert('Please log in to comment');
      return;
    }

    try {
      await axios.post(`http://127.0.0.1:5000/api/discussions/${selectedDiscussion.id}/comments`, { content: newComment, user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const updatedDiscussion = {
        ...selectedDiscussion,
        comments: [...selectedDiscussion.comments, { content: newComment, username: user.username, timestamp: new Date() }],
      };
      setDiscussions(discussions.map(d => (d.id === updatedDiscussion.id ? updatedDiscussion : d)));
      setSelectedDiscussion(updatedDiscussion);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const fetchComments = async (discussionId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/discussions/${discussionId}/comments`);
      setSelectedDiscussion({ ...discussions.find(d => d.id === discussionId), comments: response.data });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div>
      <h2>Discussions</h2>
      <form onSubmit={handleDiscussionSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newDiscussion.title}
          onChange={handleDiscussionChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newDiscussion.content}
          onChange={handleDiscussionChange}
          required
        />
        <button type="submit">Create Discussion</button>
      </form>

      <div>
        <h3>All Discussions</h3>
        {discussions.length === 0 ? (
          <p>No discussions available</p>
        ) : (
          discussions.map(discussion => (
            <div key={discussion.id} onClick={() => fetchComments(discussion.id)}>
              <h4>{discussion.title}</h4>
              <p>{discussion.content}</p>
              <p>Posted by {discussion.username} on {new Date(discussion.timestamp).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>

      {selectedDiscussion && (
        <div>
          <h3>Comments for {selectedDiscussion.title}</h3>
          {selectedDiscussion.comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            selectedDiscussion.comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>Comment by {comment.username} on {new Date(comment.timestamp).toLocaleString()}</p>
              </div>
            ))
          )}
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Add a comment"
              value={newComment}
              onChange={handleCommentChange}
              required
            />
            <button type="submit">Post Comment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Discussion;
