import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Should be greather than 15 characters')
          .required('Field is required'),
        lastName: Yup.string()
          .max(15, 'Should be greather than 15 characters')
          .required('Field is required'),
        email: Yup.string().required('Field is required').email('Fail format'),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span> {errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span> {errors.email}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
