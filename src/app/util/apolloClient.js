import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("auth_token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_BACKEND_JWT}`,
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
});

export default client;
