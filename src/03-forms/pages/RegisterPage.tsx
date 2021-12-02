import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    formData,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Data to Submit', formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'class-error'}`}
        />
        {name.trim().length <= 0 && <span>This field is required</span>}
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'class-error'}`}
        />
        {!isValidEmail(email) && <span>Invalid Email</span>}
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>This field is required</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>Should be greather than 6 characters</span>
        )}
        <input
          type='password'
          name='password2'
          placeholder='Repeat Password'
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>This field is required</span>}
        {password2.trim().length > 0 && password !== password2 && (
          <span>You should write the same password.</span>
        )}
        <button type='submit'>Send</button>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};
