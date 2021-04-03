import React from 'react';
import { Route, Switch, BrowserRouter, Link, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

import AboutPage from './components/AboutPage';
import SpecialLink from './components/SpecialLink';

function App() {
  return (
    // basename - base URL for all locations
    // all the links can use it- '/test/about' path
    // forceRefresh - if true, full page refreshes on page navigation
    // <BrowserRouter basename='/test' forceRefresh>
    <BrowserRouter>
      {/* replace - clicking the link will replace the current entry in the history stack
          instead of adding a new one. By default Link uses history.push() */}
      <Link component={SpecialLink} to='/home'>
        Home
      </Link>
      <br />

      <Link component={SpecialLink} to='/about'>
        About
      </Link>
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route exact component={AboutPage} path='/about' />
        <Route path='/notfound'>404 not found</Route>

        {/* if any of the routes didn't match the path */}
        <Redirect to='/notfound' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
