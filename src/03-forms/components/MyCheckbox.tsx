import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; //por defecto esto es optional y admite cualquier otra propiedad q le envien
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  console.log(field);

  return (
    <>
      <label>
        <input type='checkbox' {...props} {...field} />
        {label}
      </label>
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  );
};
