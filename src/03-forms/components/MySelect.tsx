import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; //por defecto esto es optional
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  console.log(field);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...props} {...field} />
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  );
};
