import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={<Main />}
    />
    <Route
      path="*"
      element={<PageNotFound />}
    />
  </Routes>

);

export default App;
