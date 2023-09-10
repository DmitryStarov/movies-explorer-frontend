import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';

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
      path="*"
      element={<PageNotFound />}
    />
  </Routes>

);

export default App;
