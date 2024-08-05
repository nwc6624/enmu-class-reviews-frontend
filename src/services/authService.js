import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api'; // Ensure this is correct

const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    return localStorage.getItem('token');
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
