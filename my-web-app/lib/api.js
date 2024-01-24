import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-<region>.hygraph.com/v2/<some hash>/master',
  cache: new InMemoryCache(),
});

const GET_PRODUCTS = gql`
query Assets {
  notes {
    title
  }
}
`;

export async function getProducts() {
    const { data } = await client.query({
      query: GET_PRODUCTS,
    });
    return data.products;
}