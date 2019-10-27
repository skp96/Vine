import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className='login-signup'>
      <Link to='/login'>Login</Link>
      &nbsp;or&nbsp;
      <Link to='/signup'>Sign Up!</Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className='header-group'>
      <h2 className='header-welcome'>
        Welcome to Vine, {currentUser.fname} {currentUser.lname}
      </h2>
      <button className='header-logout' onClick={() => logout()}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Home;
