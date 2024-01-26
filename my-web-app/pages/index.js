import Layout from "../components/layout/layout.jsx";
import WebSession from "../components/WebSession/WebSession.jsx";
import Form from "../components/form/form.jsx";
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
        <WebSession></WebSession>
        <Form></Form>
      </Layout>
    </>
  );
}

export default ProductsPage;
