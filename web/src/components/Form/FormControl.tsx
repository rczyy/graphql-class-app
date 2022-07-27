import { Field, ErrorMessage } from "formik";
import { FormError } from "./FormError";
import { FormInput } from "./FormInput";

interface FormControlProps {
  type: string;
  name: string;
  label: string;
}

export const FormControl = (props: FormControlProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <Field {...props} component={FormInput} />
      <ErrorMessage name={props.name} component={FormError} />
    </div>
  );
};
