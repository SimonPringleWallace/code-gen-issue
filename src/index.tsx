import * as React from "react";
import { render } from "react-dom";

import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  InMemoryCache,
} from "@apollo/client";
import { GET_CHARACTER, CharactersCountFragment } from "./queries";
import { FragmentType, useFragment } from "./common/graphql/types";
import { CharactersCountFragment as CharactersCountFragmentType } from "./common/graphql/types/graphql";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

type CharactersCountProps = {
  characters: FragmentType<typeof CharactersCountFragment>;
};

const CharactersCount = (props: CharactersCountProps) => {
  const characters = useFragment<CharactersCountFragmentType>(CharactersCountFragment, props.characters);

  return <div>{characters?.info?.count}</div>;
};

const ShowPosts = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error || !data || !data.characters) return <p>Error :(</p>;

  return (
    <>
      <CharactersCount characters={data.characters} />
    </>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <ShowPosts />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
