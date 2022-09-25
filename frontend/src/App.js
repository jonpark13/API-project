import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import DiscoverPage from './components/DiscoverPage'
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import LibraryPage from './components/LibraryPage';
import MusicPlayer from './components/MusicPlayer';
import UploadPage from './components/UploadPage';
import UserTracks from './components/UserTracks';
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false);
  // console.log(location.pathname, 'path')
  // console.log(isLoaded)
  useEffect(() => {
    dispatch(sessionActions.refreshUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && location.pathname !== '/' && <Navigation isLoaded={isLoaded}/>}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/library">
            <LibraryPage />
          </Route>
          <Route path="/upload">
            <UploadPage />
          </Route>
          <Route path="/your/tracks">
            <UserTracks />
          </Route>
          <Route path="*">
            <div style={{fontSize: 400}}>* 404 *</div>
          </Route>
        </Switch>
      <MusicPlayer />
    </>
  );
}

export default App;