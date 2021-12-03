import fromJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValue: { [key: string]: any } = {};
const requieredField: { [key: string]: any } = {};

for (const input of fromJson) {
  initialValue[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'requiered') {
      schema = schema.required('Required Field');
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 1, 'Min only 5 values');
    }
    if (rule.type === 'email') {
      schema = schema.email('Bad email');
    }
  }
  requieredField[input.name] = schema;
}

const validationSchea = Yup.object({ ...requieredField });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchea}
      >
        {(formik) => (
          <Form noValidate>
            {fromJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'password' || type === 'input' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  ></MyTextInput>
                );
              } else if (type === 'select') {
                return (
                  <MySelect name={name} as='select' label={label}>
                    {options?.map(({ id, label }) => {
                      return (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      );
                    })}
                  </MySelect>
                );
              }
              throw new Error(`Type ${type} non soported `);
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
