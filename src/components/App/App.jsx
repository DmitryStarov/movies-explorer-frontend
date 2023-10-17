import React, { useEffect, useState } from 'react';
import {
  Route, Routes, useNavigate, useLocation, Navigate,
} from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import auth from '../../utils/Auth';
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
  BAD_REQUEST_STATUS,
  UNAUTH_STATUS,
  CONFLICT_STATUS,
  AUTH_ERR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
  CONFLICT_EMAIL_MESSAGE,
  INVALID_REG_DATA_MESSAGE,
  REG_ERROR_MESSAGE,
  UPDATE_USER_ERROR_MESSAGE,
  UPDATE_USER_MESSAGE,
  BUTTON_REG_TEXT,
  BUTTON_REG_BLOCKED_TEXT,
  BUTTON_SAVE_TEXT,
  BUTTON_SAVE_BLOCKED_TEXT,
  BUTTON_AUTH_TEXT,
  BUTTON_AUTH_BLOCKED_TEXT,
} from '../../utils/constants';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authErrMessage, setAuthErrMessage] = useState('');
  const [regErrMessage, setRegErrMessage] = useState('');
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [updateUserInfo, setUpdateUserInfo] = useState({ message: '', isSuccess: true });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const resetMessages = () => {
    setRegErrMessage('');
    setAuthErrMessage('');
    setUpdateUserInfo({ message: '', isSuccess: true });
  };
  const [buttonLogin, setButtonLogin] = useState({
    buttonText: BUTTON_AUTH_TEXT,
    block: false,
  });
  const [buttonRegister, setButtonRegister] = useState({
    buttonText: BUTTON_REG_TEXT,
    block: false,
  });
  const [buttonUpdateProfile, setButtonUpdateProfile] = useState({
    buttonText: BUTTON_SAVE_TEXT,
    block: false,
  });

  const handleLogin = async (data) => {
    try {
      setButtonLogin({ buttonText: BUTTON_AUTH_BLOCKED_TEXT, block: true });
      await auth.autirization(data);
      setIsLoggedIn(true);
      setAuthErrMessage('');
      navigate('/movies', { replace: true });
    } catch (err) {
      if (err === UNAUTH_STATUS) {
        setAuthErrMessage(INVALID_AUTH_DATA_ERROR_MESSAGE);
      } else {
        setAuthErrMessage(AUTH_ERR_MESSAGE);
      }
    } finally {
      setButtonLogin({ buttonText: BUTTON_AUTH_TEXT, block: false });
    }
  };

  const handleRegistration = async (data) => {
    try {
      setButtonRegister({ buttonText: BUTTON_REG_BLOCKED_TEXT, block: true });
      await auth.registration(data);
      setRegErrMessage('');
      await handleLogin(data);
    } catch (err) {
      if (err === CONFLICT_STATUS) {
        setRegErrMessage(CONFLICT_EMAIL_MESSAGE);
      } else if (err === BAD_REQUEST_STATUS) {
        setRegErrMessage(INVALID_REG_DATA_MESSAGE);
      } else {
        setRegErrMessage(REG_ERROR_MESSAGE);
      }
    } finally {
      setButtonRegister({ buttonText: BUTTON_REG_TEXT, block: false });
    }
  };

  const handleLogout = async () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  const handleUpdateProfile = async (userInfo) => {
    try {
      setButtonUpdateProfile({ buttonText: BUTTON_SAVE_BLOCKED_TEXT, block: true });
      setUpdateUserInfo({ message: '', isSuccess: true });
      const user = await mainApi.patchProfile(userInfo);
      setCurrentUser(user);
      setUpdateUserInfo({ message: UPDATE_USER_MESSAGE, isSuccess: true });
    } catch (error) {
      if (error === CONFLICT_STATUS) {
        setUpdateUserInfo({ message: CONFLICT_EMAIL_MESSAGE, isSuccess: false });
      } else {
        setUpdateUserInfo({ message: UPDATE_USER_ERROR_MESSAGE, isSuccess: false });
      }
    } finally {
      setButtonUpdateProfile({ buttonText: BUTTON_SAVE_TEXT, block: false });
    }
  };

  const handleSaveMovie = async (movie) => {
    try {
      const savedMovie = await mainApi.postSavedMovie(movie);
      setSavedMovies([...savedMovies, savedMovie]);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      const { _id: deleteMovieId } = await mainApi.deleteSavedMovie(movieId);
      const updatedSavedMovies = savedMovies.filter(({ _id }) => _id !== deleteMovieId);
      setSavedMovies(updatedSavedMovies);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          setIsLoading(true);
          const savedUserMovies = await mainApi.getSavedMovies();
          setSavedMovies(savedUserMovies);
          setIsLoggedIn(true);
        } catch (err) {
          if (err === UNAUTH_STATUS) {
            console.log(`Error: ${err} ${INVALID_AUTH_DATA_ERROR_MESSAGE}`);
            return;
          }
          console.log(`Error: ${err}`);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    (async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
          const dataToken = await auth.checkToken(jwt);
          if (dataToken) {
            const currentPath = pathname;
            setIsLoading(true);
            const user = await mainApi.getUserInfo();
            setCurrentUser(user);
            setIsLoggedIn(true);
            navigate(currentPath, { replace: true });
          }
        }
      } catch (err) {
        console.log(`Error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading
        ? <Preloader />
        : (
          <Routes>
            <Route
              path="/"
              element={<Main isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <Navigate to="/movies" replace />
                : (
                  <Register
                    onRegister={handleRegistration}
                    errorMessage={regErrMessage}
                    resetError={resetMessages}
                    buttonState={buttonRegister}
                  />
                )}
            />
            <Route
              path="/signin"
              element={isLoggedIn ? <Navigate to="/movies" replace />
                : (
                  <Login
                    onLogin={handleLogin}
                    errorMessage={authErrMessage}
                    resetError={resetMessages}
                    buttonState={buttonLogin}
                  />
                )}
            />
            <Route
              path="/profile"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onLogout={handleLogout}
                    resetRequestMessage={resetMessages}
                    onSubmit={handleUpdateProfile}
                    onEdit={setIsEditProfile}
                    isEditProfile={isEditProfile}
                    requestStatus={updateUserInfo}
                    buttonState={buttonUpdateProfile}
                  />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/movies"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    isLoggedIn={isLoggedIn}
                    onSaveMovies={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                  />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/saved-movies"
              element={(
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    savedMovies={savedMovies}
                    isLoggedIn={isLoggedIn}
                    onDeleteMovie={handleDeleteMovie}
                  />
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
