import './Register.css';
import { useEffect } from 'react';
import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';
import useValidator from '../../hooks/useValidator';
import { EMAIL_REG } from '../../utils/constants';

const Register = ({
  onRegister,
  errorMessage,
  resetError,
  buttonState,
}) => {
  const {
    inputValues, errors, isValid, handleChange,
  } = useValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(inputValues);
  };

  useEffect(() => {
    resetError();
  }, []);

  return (
    <main>
      <Auth
        title="Добро пожаловать!"
        formName="sign-up"
        buttonText="Зарегистрироваться"
        isValid={isValid}
        errorText={errorMessage}
        paragraphText="Уже зарегистрированы?"
        paragraphLink="/signin"
        paragraphButton="Войти"
        onSubmit={handleSubmit}
        buttonState={buttonState}
      >
        <AuthInput
          type="text"
          placeholder="Имя"
          label
          name="name"
          minLength="2"
          maxLength="30"
          inputValue={inputValues.name}
          errorMessage={errors.name}
          placeInput="auth"
          handleChange={handleChange}
          required
        />
        <AuthInput
          type="email"
          placeholder="E-mail"
          name="email"
          inputValue={inputValues.email}
          errorMessage={errors.email}
          pattern={EMAIL_REG}
          handleChange={handleChange}
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

export default Register;
