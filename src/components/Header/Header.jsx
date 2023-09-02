import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
// import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <Link to="/" className="header__link">
      <img className="header__logo" src={logo} alt="логотип" />
    </Link>
    <Navigation />
  </header>
);
export default Header;
