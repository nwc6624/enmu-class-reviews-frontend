import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import authService from './services/authService';

// Set the token if the user is already logged in
const currentUser = authService.getCurrentUser();
if (currentUser && currentUser.token) {
  authService.setAuthToken(currentUser.token);
}

ReactDOM.render(<App />, document.getElementById('root'));
