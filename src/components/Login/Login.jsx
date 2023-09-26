import './Login.css';
import Auth from '../Auth/Auth';
import useValidator from '../../hooks/useValidator';
import AuthInput from '../AuthInput/AuthInput';

const Login = ({ errorText }) => {
  const {
    inputValues, errors, isValid, handleChange,
  } = useValidator();

  return (
    <main>
      <Auth
        title="Рады видеть!"
        formName="sign-in"
        buttonText="Войти"
        isValid={isValid}
        requestErrorText={errorText}
        paragraphText="Ещё не зарегистрированы?"
        paragraphLink="/signup"
        paragraphButton="Регистрация"
      >
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
