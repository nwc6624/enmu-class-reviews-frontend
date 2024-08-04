import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ClassReviews from './pages/ClassReviews';
import Discussions from './pages/Discussions';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import DiscussionList from './components/DiscussionList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/class-reviews" component={ClassReviews} />
        <Route path="/discussions" component={Discussions} />
      </Switch>
    </Router>
  );
}

export default App;
