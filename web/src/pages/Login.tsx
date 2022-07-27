import * as yup from "yup";
import { Form, Formik } from "formik";
import { FormControl } from "../components/Form/FormControl";
import { Link } from "react-router-dom";

interface LoginProps {}

export const Login = (_: LoginProps): JSX.Element => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is invalid."),
    password: yup.string().required("Password is required."),
  });

  return (
    <main className="flex items-stretch min-h-screen max-w-7xl m-auto pt-16 md:pt-20">
      <section className="flex w-full">
        <div className="flex flex-col max-w-xs w-full m-auto py-8 px-4 gap-8">
          <h1 className="text-4xl font-bold">Sign in</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ dirty, isValid }) => (
              <Form>
                <FormControl type="text" name="email" label="Email" />
                <FormControl type="password" name="password" label="Password" />
                <button
                  type="submit"
                  className="btn bg-blue-600 text-white normal-case w-full mt-8 border-0 hover:bg-blue-500 disabled:bg-blue-400 disabled:text-white"
                  disabled={!dirty || !isValid}
                >
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-sm">
            <span>
              No account yet?{" "}
              <Link to="/register" className="link link-hover text-blue-600">
                Sign up here
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
