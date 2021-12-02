import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: 'José Enrique',
    email: 'otipip90@gmail.com',
    password: '123456789',
    password2: '123456789',
  });

  const { name, email, password, password2 } = registerData;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Data to Submit', registerData);
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
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <input
          type='password'
          name='password2'
          placeholder='Repeat Password'
          value={password2}
          onChange={onChange}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
