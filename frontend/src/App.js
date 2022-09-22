import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import DiscoverPage from './components/DiscoverPage'
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import LibraryPage from './components/LibraryPage';
import MusicPlayer from './components/MusicPlayer';
import * as sessionActions from './store/session';
import UploadPage from './components/UploadPage';

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.refreshUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <>
          <Navigation isLoaded={isLoaded}/>
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
          <Route>
            <div>404</div>
          </Route>
          </>
        </Switch>
      )}
      <MusicPlayer />
    </>
  );
}

export default App;