import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Lees API-sleutel, toegangstoken en eindpunt uit het .env-bestand
const API_KEY = process.env.API_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const API_ENDPOINT = process.env.API_ENDPOINT;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'X-API-Key': API_KEY,
  },
});

// GraphQL query
const GET_PRODUCTS = gql`
  query Assets {
    notes {
      title
    }
  }
`;

// Functie om gegevens op te halen
export async function getProducts() {
  if (typeof window !== 'undefined') {
    try {
      // Voer de query alleen uit in de browseromgeving
      const { data } = await client.query({
        query: GET_PRODUCTS,
      });
      return data.notes;
    } catch (error) {
      console.error('Fout bij het ophalen van gegevens:', error);
      return [];
    }
  } else {
    // Geef bijvoorbeeld een lege array terug tijdens server-side rendering
    return [];
  }
}
