import './Profile.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import useValidator from '../../hooks/useValidator';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const {
    inputValues,
    errors,
    isValid,
    handleChange,
    setInputValues,
  } = useValidator();

  const handleClickEditProfile = (evt) => {
    evt.preventDefault();
    setIsEditProfile(!isEditProfile);
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setInputValues({ name: 'User', email: 'test@test.com' });
  }, []);

  return (
    <>
      <Header isLoggedIn="true" />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, User!</h1>
            <form className="profile__form" name="profile">
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
                  disabled={!isEditProfile}
                />
                <span
                  className="profile__error"
                >
                  {errors.email}
                </span>
              </label>
              {isEditProfile
            && (
              <>
                <p className="profile__request-error">
                  При обновлении профиля произошла ошибка.
                </p>
                <button
                  className="profile__submit-button button-hover"
                  type="submit"
                  disabled={!isValid}
                >
                  {isEditProfile ? 'Сохранить' : 'Редактировать'}
                </button>
              </>
            )}
              {!isEditProfile
            && (
            <>
              <button
                className="profile__edit-button button-hover"
                type="button"
                onClick={handleClickEditProfile}
              >
                {isEditProfile ? 'Сохранить' : 'Редактировать'}
              </button>
              <button className="profile__logout button-hover" type="button" onClick={handleLogOut}>Выйти из аккаунта</button>
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
