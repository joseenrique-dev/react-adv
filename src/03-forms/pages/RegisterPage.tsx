import '../styles/styles.css';

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form action=''>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input type='password' name='password2' placeholder='Repeat Password' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
