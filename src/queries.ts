import { graphql } from "./common/graphql/types";

export const CountCharactersFragment = graphql(`
  fragment Count on Characters {
    info {
      count
    }
  }
`);

export const CharactersCountFragment = graphql(`
  fragment CharactersCount on Characters {
    info {
      count
    }
  }
`);

export const GET_CHARACTER = graphql(`
  query GetCharacters {
    characters {
      ...CharactersCount
    }
  }
`);
