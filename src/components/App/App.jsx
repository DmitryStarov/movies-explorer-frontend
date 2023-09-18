import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import { testMovies } from '../../utils/constants';

const App = () => (
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
      element={<Login />}
    />
    <Route
      path="/profile"
      element={<Profile />}
    />
    <Route
      path="/movies"
      element={<Movies movies={testMovies} />}
    />
    <Route
      path="*"
      element={<PageNotFound />}
    />
  </Routes>

);

export default App;
