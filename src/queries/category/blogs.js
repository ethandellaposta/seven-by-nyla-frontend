import gql from "graphql-tag";

const CATEGORY_BLOGS_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
      blogs {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_BLOGS_QUERY;
