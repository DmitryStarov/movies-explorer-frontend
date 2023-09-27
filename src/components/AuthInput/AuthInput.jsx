import './AuthInput.css';

const AuthInput = ({
  type,
  placeholder,
  name,
  minLength = null,
  maxLength = null,
  inputValue,
  errorMessage,
  handleChange,
}) => (
  <label className="auth-input">
    <span className="auth-input__title">{placeholder}</span>
    <input
      type={type}
      placeholder={placeholder}
      className={`auth-input__input ${type === 'password' ? 'auth-input__input_type_password' : ''} ${errorMessage ? 'auth-input__input_type_error' : ''}`}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      autoComplete="off"
      required
      value={inputValue ?? ''}
      onChange={handleChange}
    />
    <span
      className="auth-input__error"
    >
      {errorMessage}
    </span>
  </label>
);
export default AuthInput;
