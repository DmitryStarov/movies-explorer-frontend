import './Auth.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

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
  onSubmit,
}) => (
  <section className="auth">
    <div className="auth__container">
      <Link to="/" className="auth__main-link button-hover">
        <img className="auth__logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="auth__title">{title}</h1>
      <form className="auth__form" name={formName} onSubmit={onSubmit}>
        {children}
        <p className="auth__error">{errorText}</p>
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
  </section>
);

export default Authentication;
