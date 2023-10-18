import './Profile.css';
import { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import useValidator from '../../hooks/useValidator';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_REG } from '../../utils/constants';

const Profile = ({
  onLogout,
  requestStatus: { message, isSuccess },
  resetRequestMessage,
  onSubmit,
  onEdit,
  isEditProfile,
  buttonState: { buttonText, block },
}) => {
  const { name, email } = useContext(CurrentUserContext);

  const {
    inputValues,
    errors,
    isValid,
    handleChange,
    setInputValues,
    setIsValid,
  } = useValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(inputValues);
  };

  useEffect(() => {
    setInputValues({ name, email });
    onEdit(false);
  }, [name, email]);

  useEffect(() => {
    resetRequestMessage();
  }, []);

  useEffect(() => {
    if (inputValues.name === name && inputValues.email === email) {
      setIsValid(false);
    }
  }, [inputValues]);

  return (
    <>
      <Header isLoggedIn="true" />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">{`Привет, ${name}!`}</h1>
            <form className="profile__form" name="profile" onSubmit={handleSubmit}>
              <label className="profile__field">
                <span className="profile__label">Имя</span>
                <input
                  className={`profile__input ${isEditProfile ? 'profile__input_active' : ''} ${errors.name ? 'profile__input_active-error' : ''}`}
                  type="text"
                  placeholder="Имя"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                  onChange={handleChange}
                  value={inputValues.name || ''}
                  autoComplete="off"
                  disabled={!isEditProfile}
                />
                <span
                  className="profile__error"
                >
                  {errors.name}
                </span>
              </label>
              <label className="profile__field">
                <span className="profile__label">E-mail</span>
                <input
                  className={`profile__input ${isEditProfile ? 'profile__input_active' : ''} ${errors.email ? 'profile__input_active-error' : ''}`}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  required
                  onChange={handleChange}
                  value={inputValues.email || ''}
                  autoComplete="off"
                  pattern={EMAIL_REG}
                  disabled={!isEditProfile}
                />
                <span
                  className="profile__error"
                >
                  {errors.email}
                </span>
              </label>
              <p className={`profile__request-message ${!isSuccess ? 'profile__request-message_type_error' : ''}`}>
                {message}
              </p>
              {isEditProfile
            && (
              <button
                className="profile__submit-button button-hover"
                type="submit"
                disabled={!isValid || block}
              >
                  {buttonText}
              </button>
            )}
              {!isEditProfile
            && (
            <>
              <button
                className="profile__edit-button button-hover"
                type="button"
                onClick={() => onEdit(true)}
              >
                {isEditProfile ? 'Сохранить' : 'Редактировать'}
              </button>
              <button className="profile__logout button-hover" type="button" onClick={onLogout}>Выйти из аккаунта</button>
            </>
            )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
