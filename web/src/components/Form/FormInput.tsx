import { FieldProps } from "formik";

type FormInputProps = FieldProps & {
  type: string;
  label: string;
};

export const FormInput = ({
  field,
  form: { touched, errors },
  label,
  type,
}: FormInputProps): JSX.Element => {
  return (
    <div className="form-control">
      <label htmlFor={field.name} className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        {...field}
        id={field.name}
        type={type}
        placeholder={
          label === "Confirm Password"
            ? "Confirm your password..."
            : `Enter your ${label.toLowerCase()}...`
        }
        className={`input w-full border-zinc-200 ${
          touched[field.name] && errors[field.name]
            ? "border-0 ring-2 ring-red-600"
            : "ring-0"
        }`}
        autoComplete="off"
      />
    </div>
  );
};
