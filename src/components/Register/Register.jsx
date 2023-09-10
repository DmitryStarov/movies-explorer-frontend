import './Register.css';
import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';
import useValidator from '../../hooks/useValidator';

const Register = ({ requestErrorText }) => {
  const {
    inputValues, errors, isValid, handleChange,
  } = useValidator();

  return (
    <Auth
      title="Добро пожаловать!"
      formName="sign-up"
      buttonText="Зарегистрироваться"
      isValid={isValid}
      requestErrorText={requestErrorText}
      paragraphText="Уже зарегистрированы?"
      paragraphLink="/signin"
      paragraphButton="Войти"
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
        label
        name="email"
        inputValue={inputValues.email}
        errorMessage={errors.email}
        placeInput="auth"
        handleChange={handleChange}
        required
      />
      <AuthInput
        type="password"
        placeholder="Пароль"
        label
        name="password"
        inputValue={inputValues.password}
        errorMessage={errors.password}
        placeInput="auth"
        handleChange={handleChange}
        required
      />
    </Auth>
  );
};

export default Register;
