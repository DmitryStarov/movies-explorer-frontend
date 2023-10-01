import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import auth from '../../utils/Auth';
import moviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  OK_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  UNAUTH_STATUS,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  CONFLICT_STATUS,
  AUTH_ERR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
} from '../../utils/constants';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authErrMessage, setAuthErrMessage] = useState('');

  const resetMessages = () => {
    setRegErrorMessage('');
    setAuthErrMessage('');
    setUpdateUserInfo({ message: '', isSuccess: true });
  };

  const handleLogin = async (data) => {
    try {
      await auth.autirization(data);
      setIsLoggedIn(true);
      setAuthErrMessage('');
    } catch (err) {
      if (err === UNAUTH_STATUS) {
        setAuthErrMessage(INVALID_AUTH_DATA_ERROR_MESSAGE);
      } else {
        setAuthErrMessage(AUTH_ERR_MESSAGE);
      }
    }
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading
        ? <Preloader />
        : (
          <Routes>
            <Route
              path="/"
              element={<Main />}
            />
            <Route
              path="/signup"
              element={<Register requestErrorText="Что-то пошло не так..." />}
            />
            <Route
              path="/signin"
              element={(
                <Login
                  onLogin={handleLogin}
                  requestErrorMessage={authErrMessage}
                  resetRequestError={resetMessages}
                />
)}
            />
            <Route
              path="/profile"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/movies"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies movies={testMovies} />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/saved-movies"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies movies={testMovies} />
                </ProtectedRoute>
              )}
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        )}
      ;
    </CurrentUserContext.Provider>
  );
};

export default App;
