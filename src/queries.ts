import { gql } from "graphql.macro";

const COUNT_FRAGMENT = gql`
  fragment Count on Characters {
    info {
      count
    }
  }
`;

export const GET_CHARACTER = gql`
  ${COUNT_FRAGMENT}
  query GetCharacters {
    characters {
      ...Count
    }
  }
`;