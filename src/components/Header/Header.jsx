import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>
    </div>
    <AuthNavigation />
  </header>
);
export default Header;
