import fromJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {(formik) => (
          <Form>
            {fromJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                ></MyTextInput>
              );
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
