import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  const { name, email, password, password2 } = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name, email, password, password2 }}
        onSubmit={(values) => {
          console.log('Submit', values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Name should bee no hight to 15 characters')
            .min(2, 'Name should bee no minor to 2 characters')
            .required('Field is required'),
          email: Yup.string()
            .email('Fail format')
            .required('Field is required'),
          password: Yup.string()
            .min(6, 'Password should bee no minor to 2 characters')
            .required('Field is required'),
          password2: Yup.string()
            .min(6, 'Password should bee no minor to 2 characters')
            .required('Field is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Pipito' />

            <MyTextInput
              label='Email'
              name='email'
              placeholder='pipito@lolo.com'
            />

            <MyTextInput label='Password' name='password' />

            <MyTextInput label='Confirm Password' name='password2' />
            <button type='submit'>Send</button>
            <button onClick={handleReset}>Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
