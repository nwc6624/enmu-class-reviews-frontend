import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    localStorage.setItem('user', JSON.stringify({
        id: response.data.user.id,
        username,
        token: response.data.access_token
    }));
    return response.data;
};

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify({
            id: response.data.user.id,
            username: response.data.user.username,
            token: response.data.access_token
        }));
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;
