import { useMeQuery } from "../graphql/generated/schema";

interface MainProps {}

export const Main = (_: MainProps): JSX.Element => {
  const { data } = useMeQuery();

  return <div>Hello {data?.me?.name}!</div>;
};
