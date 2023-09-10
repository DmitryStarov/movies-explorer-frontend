import './Auth.css';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';

const Authentication = ({
  title,
  formName,
  buttonText,
  children,
  errorText,
  paragraphText,
  paragraphLink,
  paragraphButton,
  isValid,
}) => (
  <main className="auth">
    <div className="auth__container">
      <Link to="/" className="auth__main-link button-hover">
        <img className="auth__logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="auth__title">{title}</h1>
      <form className="auth__form" name={formName}>
        {children}
        <p className="auth__request-error">{errorText}</p>
        <button
          className="auth__submit-button button-hover"
          disabled={!isValid}
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      <p className="auth__paragraph">
        {paragraphText}
        <Link
          className="auth__link link-hover"
          to={paragraphLink}
        >
          {paragraphButton}
        </Link>
      </p>
    </div>
  </main>
);

export default Authentication;
