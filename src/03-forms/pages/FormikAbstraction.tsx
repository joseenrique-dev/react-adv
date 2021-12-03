import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractation Tutorial</h1>
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
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Pipito'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='López'
            />

            <MyTextInput
              label='Email'
              name='email'
              placeholder='lolo@lolo.com'
            />

            <MySelect name='jobType' as='select' label={'Job Title'}>
              <option value='developer'>Pick something</option>
              <option value='designer'>Designer</option>
              <option value='it-junior'>IT Junior</option>
              <option value='it-senior'>IT Senior</option>
            </MySelect>

            <MyCheckbox label={'Terms and Conditions'} name='terms' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
