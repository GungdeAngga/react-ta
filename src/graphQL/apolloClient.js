import { ApolloClient, InMemoryCache, } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://strong-pelican-41.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":
          "8A5IF26EpMkHc06iKtjRL9MxiVegXxno36SR6uXW632Zr0XTRpSZLVdxC2sGDcIn",
      },
  });

  export default client;