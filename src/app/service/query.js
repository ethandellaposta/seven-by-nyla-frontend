import gql from "graphql-tag";

const SERVICE_QUERY = gql`
  query Service($id: ID!) {
    service(id: $id) {
      title
      pricing
      images {
        url
      }
    }
  }
`;

export default SERVICE_QUERY;
