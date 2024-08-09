import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Post from './components/Post';
import DiscussionList from './components/DiscussionList';
import DiscussionDetail from './components/DiscussionDetail';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Home from './pages/Home';
import About from './pages/About';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Options from './components/Options'; // Import the new Options component
import ReviewGrid from './components/ReviewGrid'; // Import ReviewGrid component
import ReviewDetail from './components/ReviewDetail'; // Import ReviewDetail component

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <PrivateRoute>
                <PostDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/discussions"
            element={
              <PrivateRoute>
                <DiscussionList />
              </PrivateRoute>
            }
          />
          <Route
            path="/discussion/:id"
            element={
              <PrivateRoute>
                <DiscussionDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/options"
            element={
              <PrivateRoute>
                <Options />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          
          {/* Add routes for reviews */}
          <Route path="/reviews" element={<ReviewGrid />} />
          <Route path="/review/:id" element={<ReviewDetail />} />

          {/* Home page route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
