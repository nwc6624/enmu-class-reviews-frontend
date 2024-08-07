import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const user = authService.getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#006400' }}>
      <Toolbar>
        <img src={logo} alt="ENMU Logo" style={{ marginRight: '10px', height: '50px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ENMU Class Reviews
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/posts">Posts</Button>
            <Button color="inherit" component={Link} to="/discussions">Discussions</Button>
            <Button color="inherit" component={Link} to="/options">Options</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

