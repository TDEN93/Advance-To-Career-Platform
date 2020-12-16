import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import Project from './components/pages/Project';
import ProjectState from './context/project/ProjectState';

import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import AlertState from './context/alert/AlertState';
import Alerts from './components/layouts/Alerts';

import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

import Settings from './components/pages/Settings';

import './App.css';
import Footer from './components/layouts/Footer';
import Profile from './components/pages/Profile';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
    <ProjectState>
      <AlertState>
      <Router>
        <Fragment>
          <Navbar />
            <div className="container-fluid">
            <Alerts />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/projects' component={Project} />
              <PrivateRoute exact path='/settings' component={Settings} />
              <PrivateRoute exact path='/:id/profile' component={Profile} />
            </Switch>
            </div>
          <Footer />
        </Fragment>
      </Router>
      </AlertState>
    </ProjectState>
    </AuthState>
  );
}

export default App;
