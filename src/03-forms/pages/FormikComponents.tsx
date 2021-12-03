import '../styles/styles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log('Submit', values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Should be greather than 15 characters')
            .required('Field is required'),
          lastName: Yup.string()
            .max(15, 'Should be greather than 15 characters')
            .required('Field is required'),
          email: Yup.string()
            .required('Field is required')
            .email('Fail format'),
          terms: Yup.boolean().oneOf([true], 'Should be acept conditions'),
          jobType: Yup.string()
            .required('Field is required')
            .notOneOf(['it-junior'], 'This option is not available'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value='developer'>Pick something</option>
              <option value='designer'>Designer</option>
              <option value='it-junior'>IT Junior</option>
              <option value='it-senior'>IT Senior</option>
            </Field>

            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and Confitions
            </label>
            <ErrorMessage name='terms' component='span' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
