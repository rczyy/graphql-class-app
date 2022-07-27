import { Route, Routes } from "react-router-dom";
import { useMeQuery } from "./graphql/generated/schema";
import { Navbar } from "./layout/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Register } from "./pages/Register";

interface AppProps {}

export const App = (_: AppProps): JSX.Element => {
  const { data } = useMeQuery();

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={data?.me ? <Main /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
