import Layout from "../components/Layout/Layout";
import WebSession from "../components/WebSession/WebSession";
import Form from "../components/Form/Form";
import { useEffect, useState } from 'react';
import { getProducts } from './api/graphql';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }

    loadData();
  }, []);

  return (
    <>
      <Layout>
        {/* <h1>{notes.title}</h1> */}
        <WebSession></WebSession>
        <Form></Form>
      </Layout>
    </>
  );
}

export default ProductsPage;
