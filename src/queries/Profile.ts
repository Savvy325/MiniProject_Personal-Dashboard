import { gql } from "urql";

export const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        address {
          street
          suite
          city
          zipcode
        }
        phone
        website
        company {
          name
          catchPhrase
          bs
        }
      }
    }
  }
`;

export const GET_TODOS = gql`
  query {
    albums {
      data {
        id
        title
      }
    }
  }
`;

export const GET_ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
        photos {
          data {
            title
            url
            thumbnailUrl
          }
        }
      }
    }
  }
`;
