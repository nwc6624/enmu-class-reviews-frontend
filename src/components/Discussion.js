import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authService from '../services/authService';
import './styles.css';


const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({ topic: '', content: '' });
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchDiscussions = async () => {
      const response = await axios.get('http://127.0.0.1:5000/api/discussions');
      setDiscussions(response.data);
    };

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
      const response = await axios.post('http://127.0.0.1:5000/api/discussions', newDiscussion, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setDiscussions([...discussions, response.data.discussion]);
      setNewDiscussion({ topic: '', content: '' });
    } catch (error) {
      console.error(error);
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
      await axios.post(`http://127.0.0.1:5000/api/discussions/${selectedDiscussion.id}/comments`, { content: newComment }, {
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
      console.error(error);
    }
  };

  const fetchComments = async (discussionId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/discussions/${discussionId}/comments`);
      setSelectedDiscussion({ ...discussions.find(d => d.id === discussionId), comments: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Discussions</h2>
      <form onSubmit={handleDiscussionSubmit}>
        <input
          type="text"
          name="topic"
          placeholder="Topic"
          value={newDiscussion.topic}
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
        {discussions.map(discussion => (
          <div key={discussion.id} onClick={() => fetchComments(discussion.id)}>
            <h4>{discussion.topic}</h4>
            <p>{discussion.content}</p>
            <p>Posted by {discussion.username} on {new Date(discussion.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>

      {selectedDiscussion && (
        <div>
          <h3>Comments for {selectedDiscussion.topic}</h3>
          {selectedDiscussion.comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <p>Comment by {comment.username} on {new Date(comment.timestamp).toLocaleString()}</p>
            </div>
          ))}
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
