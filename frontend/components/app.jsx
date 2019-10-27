import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Vine, experience wine the right way</h1>
      <HomeContainer />
    </header>

    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;
