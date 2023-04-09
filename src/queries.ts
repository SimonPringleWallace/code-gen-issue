import { graphql } from "./common/graphql/types";

graphql(`
  fragment Count on Characters {
    info {
      count
    }
  }
`);

export const GET_CHARACTER = graphql(`
  query GetCharacters {
    characters {
      ...Count
    }
  }
`);
