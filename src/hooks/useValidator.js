import { useState } from 'react';

export default function useValidator(values = {}) {
  const [inputValues, setInputValues] = useState(values);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState('');

  function handleChange(evt) {
    const { value, name } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }

  function resetValidation() {
    setInputValues({});
    setIsValid(false);
    setErrors({});
  }

  return {
    inputValues,
    setInputValues,
    errors,
    setIsValid,
    handleChange,
    resetValidation,
    isValid,
  };
}
