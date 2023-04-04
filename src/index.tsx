import * as React from "react";
import { render } from "react-dom";

import { ApolloClient, ApolloProvider, useQuery, InMemoryCache } from "@apollo/client";
import { GET_CHARACTER } from "./queries";
import { GetCharactersQuery } from "./common/graphql/types/graphql";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const ShowPosts = () => {
  const { loading, error, data } = useQuery<GetCharactersQuery>(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div key={1}>{data?.characters?.info?.count}</div>;
};

const App = () => (
  <ApolloProvider client={client}>
    <ShowPosts />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);

