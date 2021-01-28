import gql from "graphql-tag";

const HOME_QUERY = gql`
  query Home {
    about {
  	  bio
      image {
        url
      }
    }
  }
`;

export default HOME_QUERY;
