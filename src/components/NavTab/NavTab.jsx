import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

const NavTab = () => (
  <nav className="nav-tab">
    <ul className="nav-tab__links">
      <li>
        <HashLink
          className="nav-tab__link link-hover"
          smooth
          to="#about-project"
        >
          О проекте
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav-tab__link link-hover"
          smooth
          to="#techs"
        >
          Технологии
        </HashLink>
      </li>
      <li>
        <HashLink
          className="nav-tab__link link-hover"
          smooth
          to="#about-me"
        >
          Студент
        </HashLink>
      </li>
    </ul>
  </nav>
);

export default NavTab;
