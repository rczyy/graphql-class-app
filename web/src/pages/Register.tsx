import * as yup from "yup";
import { Form, Formik } from "formik";
import { FormControl } from "../components/Form/FormControl";
import { Link, Navigate } from "react-router-dom";
import { useRegisterUserMutation } from "../graphql/generated/schema";
import { FormError } from "../components/Form/FormError";

interface RegisterProps {}

export const Register = (_: RegisterProps): JSX.Element => {
  const [registerUser, { data, loading }] = useRegisterUserMutation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required.")
      .min(4, "Name must be at least 4 characters.")
      .max(20, "Name must be at most 20 characters."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is invalid."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters.")
      .max(20, "Password must be at most 20 characters."),
    confirmPassword: yup
      .string()
      .required("Please confirm your password.")
      .oneOf([yup.ref("password")], "Password doesn't match."),
  });

  if (data?.registerUser.user) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex items-stretch min-h-screen max-w-7xl m-auto pt-16 md:pt-20">
      <section className="flex w-full">
        <div className="flex flex-col max-w-xs w-full m-auto py-8 px-4 gap-8">
          <h1 className="text-4xl font-bold">Sign up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async ({ confirmPassword, ...values }) => {
              await registerUser({
                variables: {
                  user: values,
                },
              });
            }}
          >
            {({ dirty, isValid }) => (
              <Form>
                <FormControl type="text" name="name" label="Name" />
                <FormControl type="text" name="email" label="Email" />
                <FormControl type="password" name="password" label="Password" />
                <FormControl
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                />
                <button
                  type="submit"
                  className={`btn bg-blue-600 text-white normal-case w-full mt-8 border-0 hover:bg-blue-500 disabled:bg-blue-400 disabled:text-white ${
                    loading && "loading"
                  }`}
                  disabled={!dirty || !isValid}
                >
                  Sign up
                </button>
                {data?.registerUser.errors &&
                  data.registerUser.errors.map((error) => (
                    <div className="mt-2">
                      <FormError>{error.message}</FormError>
                    </div>
                  ))}
              </Form>
            )}
          </Formik>
          <div className="text-sm">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-600">
                Sign in here
              </Link>
            </span>
          </div>
        </div>
        <figure className="bg-zinc-200 w-full h-full ml-20 hidden md:block">
          <img
            src="https://picsum.photos/2000"
            alt=""
            className="h-full w-full object-cover"
          />
        </figure>
      </section>
    </main>
  );
};
