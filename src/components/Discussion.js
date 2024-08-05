import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Discussion = () => {
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        const fetchDiscussions = async () => {
            const response = await axios.get('/api/discussions');
            setDiscussions(response.data);
        };

        fetchDiscussions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('/api/discussions', { topic, content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTopic('');
            setContent('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Discussion</h2>
                <input type="text" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} required />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Create Discussion</button>
            </form>
            <div>
                <h2>Discussions</h2>
                {discussions.map(discussion => (
                    <div key={discussion.id}>
                        <h3>{discussion.topic}</h3>
                        <p>{discussion.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discussion;
