import gql from "graphql-tag";

const BLOG_QUERY = gql`
  query Blogs($id: ID!) {
    blog(id: $id) {
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
`;

export default BLOG_QUERY;
