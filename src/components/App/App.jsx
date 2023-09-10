import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

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
      path="*"
      element={<PageNotFound />}
    />
  </Routes>

);

export default App;
