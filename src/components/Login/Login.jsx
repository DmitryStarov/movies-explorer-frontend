import './Login.css';
import { useEffect } from 'react';
import Auth from '../Auth/Auth';
import useValidator from '../../hooks/useValidator';
import AuthInput from '../AuthInput/AuthInput';
import { EMAIL_REG } from '../../utils/constants';

const Login = ({
  onLogin,
  errorMessage,
  resetError,
}) => {
  const {
    inputValues, errors, isValid, handleChange,
  } = useValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(inputValues);
  };

  useEffect(() => {
    resetError();
  }, []);
  return (
    <main>
      <Auth
        title="Рады видеть!"
        formName="sign-in"
        buttonText="Войти"
        isValid={isValid}
        requestErrorText={errorMessage}
        paragraphText="Ещё не зарегистрированы?"
        paragraphLink="/signup"
        paragraphButton="Регистрация"
        onSubmit={handleSubmit}
      >
        <AuthInput
          type="email"
          placeholder="E-mail"
          name="email"
          inputValue={inputValues.email}
          errorMessage={errors.email}
          placeInput="auth"
          handleChange={handleChange}
          pattern={EMAIL_REG}
          required
        />
        <AuthInput
          type="password"
          placeholder="Пароль"
          label
          name="password"
          minLength="6"
          maxLength="30"
          inputValue={inputValues.password}
          errorMessage={errors.password}
          placeInput="auth"
          handleChange={handleChange}
          required
        />
      </Auth>
    </main>
  );
};

export default Login;
